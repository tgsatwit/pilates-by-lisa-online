export interface BlogPost {
  id: string;
  title: string;
  author: string;
  content: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  createdAt: Date;
  updatedAt: Date;
} 