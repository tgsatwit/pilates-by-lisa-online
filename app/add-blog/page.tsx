"use client"

import React, { useState } from "react";
import BlogEditor from "@/components/blog/BlogEditor";
import { db } from "@/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from '@/components/blog/ImageUpload'

export default function AddBlog() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    tags: "",
    coverImage: "",
    excerpt: "",
  });

  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContentChange = (newContent: string) => {
    console.log('Content updated:', newContent) // Debug log
    setContent(newContent)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const { title, author, tags, coverImage, excerpt } = formData;
      const tagsArray = tags.split(",").map((tag) => tag.trim());

      // Debug log
      console.log('Submitting blog with content:', content)

      await addDoc(collection(db, "blog"), {
        title,
        author,
        tags: tagsArray,
        coverImage,
        excerpt,
        content, // This should now contain the editor content
        createdAt: Timestamp.now().toDate(),
        updatedAt: Timestamp.now().toDate(),
      });

      // Reset form
      setFormData({
        title: "",
        author: "",
        tags: "",
        coverImage: "",
        excerpt: "",
      });
      setContent("");
      
      alert("Blog post created successfully!");
      router.push('/blog');
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to create blog post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white mt-16">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-sm border p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <Input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-slate-100 text-slate-900"
                required
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author
              </label>
              <Input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full bg-slate-100 text-slate-900"
                required
                placeholder="Enter author name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <Input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full bg-slate-100 text-slate-900"
                placeholder="e.g., pilates, fitness, wellness (comma-separated)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt
              </label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full bg-slate-100 text-slate-900 min-h-[100px]"
                placeholder="Enter a brief summary of your blog post"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              <ImageUpload
                onImageUploaded={(url) => setFormData(prev => ({ ...prev, coverImage: url }))}
                currentImageUrl={formData.coverImage}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <div className="border rounded-lg bg-white">
                <BlogEditor onChange={handleContentChange} />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Blog Post"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}