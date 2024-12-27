"use client"

import React, { useCallback } from "react"
import { Editor } from '@tinymce/tinymce-react'
import { storage } from '@/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

interface BlogEditorProps {
  onChange: (content: string) => void
}

export default function BlogEditor({ onChange }: BlogEditorProps) {
  const OLD_DOMAIN = 'wp.com' // Replace with your old domain

  const downloadAndUploadImage = async (url: string): Promise<string> => {
    try {
      // Download the image
      const response = await fetch(url)
      const blob = await response.blob()

      // Generate a filename from the URL
      const filename = url.split('/').pop() || `image-${Date.now()}`
      
      // Upload to Firebase Storage
      const storageRef = ref(storage, `blog-content/${Date.now()}-${filename}`)
      await uploadBytes(storageRef, blob)
      
      // Get the new URL
      return await getDownloadURL(storageRef)
    } catch (error) {
      console.error('Error processing image:', error)
      return url // Return original URL if process fails
    }
  }

  const processContent = async (content: string): Promise<string> => {
    try {
      // Create a temporary div to parse HTML
      const div = document.createElement('div')
      div.innerHTML = content

      // Find all images
      const images = div.getElementsByTagName('img')

      // Process each image
      for (let img of Array.from(images)) {
        const src = img.getAttribute('src')
        if (src && src.includes(OLD_DOMAIN)) {
          const newUrl = await downloadAndUploadImage(src)
          img.setAttribute('src', newUrl)
        }
      }

      return div.innerHTML
    } catch (error) {
      console.error('Error processing content:', error)
      return content
    }
  }

  const handleEditorChange = async (content: string, editor: any) => {
    const processedContent = await processContent(content)
    onChange(processedContent)
  }

  const handleImageUpload = async (blobInfo: any): Promise<string> => {
    try {
      const file = blobInfo.blob()
      const storageRef = ref(storage, `blog-content/${Date.now()}-${blobInfo.filename()}`)
      
      await uploadBytes(storageRef, file)
      return await getDownloadURL(storageRef)
    } catch (error) {
      console.error('Error uploading image:', error)
      throw new Error('Failed to upload image')
    }
  }

  return (
    <Editor
      apiKey='85pl46vj5v673qpz79822lamb0nqs7elb560d3fy081my2tw'
      init={{
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
          'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
          'fullscreen', 'insertdatetime', 'media', 'table', 'wordcount', 'paste'
        ],
        toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | image media link | help',
        height: 500,
        menubar: true,
        branding: false,
        promotion: false,
        statusbar: true,
        content_style: 'body { font-family:Inter,Arial,sans-serif; font-size:16px }',
        
        // Image settings
        images_upload_handler: handleImageUpload,
        automatic_uploads: true,
        file_picker_types: 'image',
        paste_data_images: true,
        
        // Handle pasted content
        paste_preprocess: function (plugin, args) {
          // This will trigger handleEditorChange which processes the images
          console.log('Content pasted, will process images...')
        }
      }}
      onEditorChange={handleEditorChange}
      initialValue="Write your blog content here..."
    />
  )
}