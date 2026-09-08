export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Setup" | "Payments" | "Streaming" | "Channels";
}

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "Is IPTV legal in USA? Is IPTV illegal in USA?",
    answer:
      "IPTV technology itself is completely legal in the United States. IPTV (Internet Protocol Television) simply refers to delivering television content over internet protocols rather than traditional cable lines or satellite dishes. Leading telecom providers and streaming networks legally use IPTV every day. Legality depends on whether the streaming service holds proper broadcasting rights and transmission licenses for its distributed content. Users in the USA can freely and legally use IPTV applications (such as TiviMate, IPTV Smarters Pro, and IBO Player) with valid credentials across all their home devices.",
  },
  {
    category: "General",
    question: "What is the best IPTV service in the USA?",
    answer:
      "IPTV USA Pro is widely rated as the best IPTV service in the USA due to its high-speed Anti Freeze 9.3 server architecture, 99.9% uptime, and zero-buffering performance during high-demand live sports events. It delivers over 24,000 live channels in 4K & FHD, 110,000+ daily updated VOD movies and TV shows, an automated Electronic Program Guide (EPG), 7-day catch-up replay, and dedicated 24/7 customer support via Telegram and email.",
  },
  {
    category: "Setup",
    question: "How to get IPTV in the USA? (How do you / can I get IPTV?)",
    answer:
      "Getting IPTV in the USA is simple and takes under 5 minutes: 1) Select your preferred subscription package (1, 3, 6, or 12 Months) on our pricing page. 2) Complete secure checkout with Credit Card, PayPal, or Crypto. 3) Check your email inbox or Telegram for your instant M3U playlist link and Xtream Codes API login credentials. 4) Download your favorite IPTV player on your device (e.g. Firestick, Smart TV, Apple TV), log in, and begin streaming over 24,000 live channels right away.",
  },
  {
    category: "Setup",
    question: "How do I set up IPTV? (How to set up IPTV on Firestick, Smart TV & Mobile)",
    answer:
      "Setting up IPTV is quick and straightforward on any modern device:\n• Amazon Firestick & Android TV: Install the Downloader app, enter shortcode 278012 for TiviMate or 80911 for IPTV Smarters Pro, select 'Login with Xtream Codes API', enter your server details, and click connect.\n• Samsung & LG Smart TVs: Open your TV's official App Store, install IBO Player or Smart IPTV, and upload your playlist via the player's web portal or enter your Xtream Codes credentials directly.\n• Apple TV, iPhone & iPad: Download IPTVX or GSE Smart IPTV from the App Store and add your M3U playlist URL.\n• Windows PC & Mac: Use VLC Media Player or IPTV Smarters Desktop to stream directly on your computer.",
  },
  {
    category: "Payments",
    question: "How much is IPTV in the USA?",
    answer:
      "IPTV is dramatically more affordable than traditional cable or satellite packages, which often cost $100 to $150+ per month. IPTV USA Pro offers transparent, no-contract pricing starting at just $14.95 for 1 Month, $29.95 for 3 Months ($9.98/mo), $44.95 for 6 Months ($7.49/mo), and our most popular 12-Month plan at only $59.95 (equivalent to just $4.99/mo). Every plan includes the complete 24,000+ live channel catalog, 110,000+ VOD titles, PPV events, and 4K streaming with zero hidden hardware fees.",
  },
  {
    category: "Channels",
    question: "How can I watch Indian channels in USA? (How to watch Indian TV in USA)",
    answer:
      "You can watch Indian channels in the USA effortlessly with IPTV USA Pro. We offer over 2,500+ dedicated Indian and South Asian channels in brilliant HD and 4K quality, covering all major regional languages: Hindi, Punjabi, Tamil, Telugu, Malayalam, Bengali, Marathi, Gujarati, Kannada, and Urdu. Subscribers enjoy 24/7 access to top entertainment networks (Star Plus, Zee TV, Sony Entertainment, Colors, Sab TV), Indian news channels, regional cinema, and live cricket broadcasts (Star Sports, Sony Sports Network, Willow TV, ICC World Cup tournaments, and IPL). Simply install our credentials on your Firestick, Smart TV, or mobile phone to stream live Indian TV anywhere in the United States.",
  },
  {
    category: "General",
    question: "What is IPTV USA and how does IPTV streaming work?",
    answer:
      "IPTV USA Pro is a premium streaming service delivering over 24,000 live TV channels and 110,000+ video on demand movies and series directly over your internet connection. No satellite dish, cable technician, or bulky set-top box is required. All you need is an internet connection of at least 15 Mbps and your preferred streaming device.",
  },
  {
    category: "Streaming",
    question: "What is IPTV USA Anti Freeze 9.3 Technology?",
    answer:
      "Anti Freeze 9.3 is our proprietary server load-balancing architecture that continuously monitors and redistributes streaming traffic across multi-redundant 10Gbps NVMe clusters. Even during massive worldwide traffic peaks like NFL Super Bowl Sunday, FIFA finals, or UFC Championship PPV fights, your stream remains completely stable with zero stutter or buffering.",
  },
  {
    category: "Streaming",
    question: "Can I use a VPN with IPTV USA?",
    answer:
      "Yes! IPTV USA is 100% VPN friendly. While our servers are encrypted and do not require a VPN to operate at full speed, you are free to use any VPN provider of your choice (ExpressVPN, NordVPN, Surfshark, etc.) without account throttling or geographical restrictions.",
  },
  {
    category: "General",
    question: "Can I stream on multiple devices at the same time?",
    answer:
      "Yes! You can install your IPTV USA credentials on all your household devices. Simultaneous streaming depends on the plan you select. We offer 1, 2, and 3 simultaneous connection packages so your whole family can watch different channels on different TVs, tablets, or phones simultaneously.",
  },
  {
    category: "Payments",
    question: "What payment methods are accepted for IPTV USA subscriptions?",
    answer:
      "We accept all major Credit and Debit Cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Cryptocurrencies (Bitcoin, USDT, Ethereum) for complete payment security and privacy.",
  },
  {
    category: "Payments",
    question: "Does IPTV USA offer a Money-Back Guarantee?",
    answer:
      "Yes! All 6-month and 12-month IPTV USA subscriptions include our 7-day money-back guarantee. If you experience unresolved technical issues or service disruptions that our 24/7 technical support team cannot resolve, you are entitled to a prompt, full refund.",
  },
];
