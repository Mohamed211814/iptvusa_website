export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  coverImage?: string;
  tags: string[];
  status: "published" | "draft";
  featured?: boolean;
}

export const initialBlogPosts: BlogPost[] = [];
