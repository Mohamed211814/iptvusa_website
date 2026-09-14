const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'src', 'data', 'blog-posts.json');
const tsPath = path.join(__dirname, '..', 'src', 'data', 'blog.ts');

const existingPosts = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const iptvUsaIndex = existingPosts.findIndex(p => p.slug === 'iptv-usa');
if (iptvUsaIndex !== -1) {
  const current = existingPosts[iptvUsaIndex];
  current.dateModified = "September 14, 2026";
  current.tags = [
    "IPTV USA",
    "IPTV subscription",
    "Best IPTV USA",
    "IPTV service USA",
    "IPTV streaming USA",
    "Cord Cutting",
    "Firestick IPTV",
    "Live TV USA",
    "Anti Freeze Streaming"
  ];
  
  current.faqs = [
    {
      question: "What is IPTV USA?",
      answer: "IPTV USA refers to Internet Protocol Television services tailored for viewers across the United States. Instead of delivering television via cable cords or satellite dishes, IPTV streams over 24,000 live HD/4K television channels, sports networks, and on-demand movies directly across broadband internet to devices like Firestick, Smart TVs, Android, Apple TV, and PC."
    },
    {
      question: "What channels are included with an IPTV USA subscription?",
      answer: "An IPTV USA subscription includes major American broadcast networks (ABC, CBS, NBC, FOX, PBS), premium sports feeds (ESPN, FS1, TNT, NFL, NBA, MLB, NHL, UFC), 24/7 national and local news across all 50 states, premium movie channels, and international bouquets (Latino, UK, Canadian, Indian, and European)."
    },
    {
      question: "What internet speed is recommended for 4K IPTV USA streaming?",
      answer: "For standard high-definition (HD) streaming, a broadband speed of 15–25 Mbps is recommended. For seamless 4K Ultra HD and 60FPS live sports streaming with zero buffering, we recommend an internet connection speed of 35 Mbps or higher."
    },
    {
      question: "Can I watch live sports and PPV on IPTV USA?",
      answer: "Yes. IPTV USA provides comprehensive live sports coverage, including Sunday NFL football, NBA basketball, MLB baseball, NHL hockey, college sports, Premier League soccer, Champions League, UFC title fights, and boxing events in 4K resolution."
    },
    {
      question: "How do I install IPTV USA on my Amazon Firestick?",
      answer: "You can install IPTV USA on your Amazon Firestick in less than 5 minutes using the Downloader app. Download a compatible IPTV player like IPTV Smarters Pro or TiviMate, enter your Xtream Codes API credentials sent upon activation, and your channel lineup will load instantly."
    },
    {
      question: "Do I need a VPN to use IPTV USA?",
      answer: "While a VPN is not strictly mandatory because IPTV USA uses encrypted 10Gbps servers with Anti Freeze 9.3 protocols, many US users choose to use a VPN to prevent ISP bandwidth throttling during peak sports broadcast hours and maintain complete digital privacy."
    },
    {
      question: "How quickly is an IPTV USA account activated?",
      answer: "IPTV USA accounts are activated instantly. Upon completing your order, your M3U playlist link and Xtream Codes API login credentials are automatically dispatched to your email and Telegram support within minutes."
    },
    {
      question: "Can I use IPTV USA on Smart TVs without a Firestick?",
      answer: "Yes. Samsung Smart TVs (Tizen OS) and LG Smart TVs (webOS) support dedicated IPTV player apps like IBO Player and Smart IPTV directly from their official app stores, allowing you to stream without external dongles."
    },
    {
      question: "Is IPTV USA legal in the United States?",
      answer: "Yes, IPTV technology is 100% legal in the USA. Legitimate IPTV services operate by securing authorized commercial retransmission and distribution agreements for the channels they provide."
    },
    {
      question: "How much does an IPTV USA subscription cost?",
      answer: "IPTV USA plans start at $14.95 for a 1-month pass and go up to $69.95 for a 1-year subscription (averaging less than $5.83 per month), saving American households over $1,500 annually compared to traditional cable."
    }
  ];

  existingPosts[iptvUsaIndex] = current;
  console.log('Updated iptv-usa post successfully');
}

fs.writeFileSync(jsonPath, JSON.stringify(existingPosts, null, 2), 'utf8');

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

export const initialBlogPosts: BlogPost[] = ${JSON.stringify(existingPosts, null, 2)};
`;

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log('Successfully written both blog-posts.json and blog.ts!');
