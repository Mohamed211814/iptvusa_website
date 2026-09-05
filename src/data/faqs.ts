export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Setup" | "Payments" | "Streaming";
}

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is IPTV USA and how does it work?",
    answer:
      "IPTV USA Pro is a high grade premium streaming service that delivers over 24,000 live television channels and 110,000+ video on demand titles directly to your device via your internet connection. No satellite dish or traditional cable box is required. All you need is an internet connection of at least 15 Mbps and your preferred streaming device.",
  },
  {
    category: "General",
    question: "How fast do I receive my login credentials after payment?",
    answer:
      "Instantly! Once your payment is confirmed, your M3U Playlist, Xtream Codes API credentials, and portal URL are automatically generated and sent to your email address and WhatsApp within 5 to 15 minutes.",
  },
  {
    category: "Setup",
    question: "Which devices and applications are supported?",
    answer:
      "Our service is 100% compatible with virtually every modern streaming device: Amazon Firestick / Fire TV Cube, Android TV (Nvidia Shield, Chromecast with Google TV, Xiaomi), Apple TV (via IPTVX or GSE), Smart TVs (Samsung Tizen, LG webOS via IBO Player, Smart IPTV, Nanomid), iOS (iPhone/iPad), Android smartphones, Windows PC, Mac, and dedicated MAG boxes.",
  },
  {
    category: "Streaming",
    question: "What is Anti Freeze 9.3 Technology?",
    answer:
      "Anti Freeze is our proprietary server balancing architecture that continuously redistributes stream loads across multi redundant 10Gbps NVMe clusters. Even during high traffic moments like Super Bowl, UEFA Champions League finals, or major UFC PPVs, your stream remains uninterrupted with zero stuttering or buffering.",
  },
  {
    category: "Streaming",
    question: "Can I use a VPN with IPTV USA?",
    answer:
      "Yes, our servers are completely VPN friendly. While our streams are secure and do not require a VPN to operate at peak speed, you are free to use ExpressVPN, NordVPN, Surfshark, or any provider of your choice without account throttling.",
  },
  {
    category: "General",
    question: "Can I watch on multiple devices at the same time?",
    answer:
      "Yes! While you can install your credentials on multiple devices, simultaneous streaming depends on the plan you select. We offer 1, 2, and 3 simultaneous connection packages so your entire family can stream different channels at the same time.",
  },
  {
    category: "Payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major Credit and Debit Cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Cryptocurrencies (Bitcoin, USDT, Ethereum) for complete anonymity and security.",
  },
  {
    category: "Payments",
    question: "Do you offer a Money Back Guarantee or Free Trial?",
    answer:
      "Yes! We offer a 24 Hour Free Trial so you can test our channel speed, stability, and image quality risk free. In addition, all 6 month and 12 month subscriptions are backed by our 7 day money back guarantee.",
  },
];
