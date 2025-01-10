export interface BlogPost {
  id: string;
  title: string;
  author: string;
  content: string;
  coverImage: string;
  categories: string[];
  excerpt?: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
} 