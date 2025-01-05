"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { BlogPost } from "@/types";

const tags = [
  "All",
  "Pilates",
  "Wellness",
  "Fitness",
  "Nutrition",
  "Mindfulness",
  "Technique",
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BlogPost[];
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag =
        selectedTag === "All" || post.tags.includes(selectedTag);
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery, posts]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  // Reset to first page when filters change
  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-slate-100 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            The PBL Blog
          </h1>
          <p className="text-lg text-gray-600">
            Expert tips, insights and guidance to help you on your Pilates
            journey
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 border-gray-200 bg-white text-gray-900"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={cn(
                "cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-gray-900 hover:text-white border-2 text-gray-700 font-medium rounded-full",
                selectedTag === tag
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "border-slate-300 hover:border-slate-900",
              )}
              onClick={() => handleTagChange(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          {paginatedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              No articles found matching your criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900"
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "min-w-[40px] border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900",
                  currentPage === page
                    ? "bg-slate-900 text-white hover:bg-slate-800 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
