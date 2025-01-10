"use client";

import { useEffect, useState, use } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { BlogPost } from "@/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Timestamp } from "firebase/firestore";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const resolvedParams = use(params);

  // Format the date
  const formatDate = (timestamp: Timestamp | Date) => {
    try {
      // Convert Firestore Timestamp to Date if necessary
      const date = timestamp instanceof Timestamp ? timestamp.toDate() : timestamp;
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date not available';
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("slug", "==", resolvedParams.slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setPost({
            id: doc.id,
            ...data,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
          } as BlogPost);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [resolvedParams.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <article className="max-w-3xl mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to blog
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="text-gray-500">
            <span className="font-medium">{post.author}</span>
          </div>
        </div>

        {post.coverImage && (
          <div className="relative w-full h-[400px] rounded-t-lg overflow-hidden shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 800px"
              priority
              className="object-cover"
            />
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-8 rounded-t-none">
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="text-xs border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <time 
              dateTime={post.createdAt instanceof Timestamp ? post.createdAt.toDate().toISOString() : post.createdAt?.toString()}
              className="text-sm text-gray-500"
            >
              {formatDate(post.createdAt)}
            </time>
          </div>

          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-8 font-medium italic leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div
            className="[&>p]:text-black [&>p]:mb-4 [&>p]:leading-relaxed
                     [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-4 [&>h1]:mt-8
                     [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:mt-8
                     [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mb-4 [&>h3]:mt-6
                     [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ul>li]:text-black [&>ul>li]:mb-2
                     [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-4 [&>ol>li]:text-black [&>ol>li]:mb-2
                     [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 
                     [&>blockquote]:italic [&>blockquote]:text-gray-700 [&>blockquote]:my-6
                     [&>a]:text-blue-600 [&>a]:underline hover:[&>a]:text-blue-800
                     [&>strong]:font-bold [&>strong]:text-gray-900
                     [&>em]:italic [&>em]:text-gray-900
                     [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-8 [&>img]:max-w-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
} 