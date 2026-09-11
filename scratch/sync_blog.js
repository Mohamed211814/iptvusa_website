const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'src', 'data', 'blog-posts.json');
const tsPath = path.join(__dirname, '..', 'src', 'data', 'blog.ts');

const posts = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const tsContent = `export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole?: string;
  date: string;
  dateModified?: string;
  readTime: string;
  coverImage?: string;
  tags: string[];
  status: "published" | "draft";
  featured?: boolean;
  faqs?: { question: string; answer: string }[];
}

export const initialBlogPosts: BlogPost[] = ${JSON.stringify(posts, null, 2)};
`;

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log('Successfully synchronized blog.ts from blog-posts.json with ' + posts.length + ' posts.');
console.log('First post (Featured): ' + posts[0].title);
