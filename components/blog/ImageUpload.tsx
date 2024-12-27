"use client"

import { useState } from 'react'
import { storage } from '@/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

interface ImageUploadProps {
  onImageUploaded: (url: string) => void
  currentImageUrl?: string
}

export function ImageUpload({ onImageUploaded, currentImageUrl }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(currentImageUrl)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploading(true)

      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, `blog-covers/${Date.now()}-${file.name}`)
      
      // Upload the file
      await uploadBytes(storageRef, file)
      
      // Get the download URL
      const downloadUrl = await getDownloadURL(storageRef)
      
      // Update preview
      setPreviewUrl(downloadUrl)
      
      // Pass URL to parent component
      onImageUploaded(downloadUrl)
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          className="text-slate-900 hover:bg-slate-600"
          onClick={() => document.getElementById('cover-image-upload')?.click()}
          disabled={uploading}
        >
          {uploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            'Upload Image'
          )}
        </Button>
        <input
          id="cover-image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {previewUrl && (
        <div className="relative aspect-video w-full max-w-xl overflow-hidden rounded-lg border">
          <Image
            src={previewUrl}
            alt="Cover image preview"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
} 