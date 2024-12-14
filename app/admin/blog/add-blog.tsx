import React, { useState } from "react";
import BlogEditor from "@/components/blog/BlogEditor";
import { db } from "@/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Descendant } from "slate";

export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    tags: "",
    coverImage: "",
  });

  const [content, setContent] = useState<Descendant[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, author, tags, coverImage } = formData;
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    await addDoc(collection(db, "blogs"), {
      title,
      author,
      tags: tagsArray,
      coverImage,
      content: JSON.stringify(content),
      createdAt: Timestamp.now().toDate(),
    });

    alert("Blog added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label className="block font-semibold mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Author</label>
        <input
          type="text"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Tags (comma-separated)</label>
        <input
          type="text"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Cover Image URL</label>
        <input
          type="text"
          value={formData.coverImage}
          onChange={(e) =>
            setFormData({ ...formData, coverImage: e.target.value })
          }
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Content</label>
        <BlogEditor onChange={setContent} />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Blog
      </button>
    </form>
  );
}