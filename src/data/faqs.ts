export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Setup" | "Payments" | "Streaming";
}

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is IPTV USA and how does IPTV USA streaming work?",
    answer:
      "IPTV USA Pro is a high grade premium streaming service that delivers over 24,000 live television channels and 110,000+ video on demand titles directly to your device via your internet connection. No satellite dish or traditional cable box is required. All you need is an internet connection of at least 15 Mbps and your preferred streaming device to enjoy IPTV USA.",
  },
  {
    category: "General",
    question: "How fast do I receive my IPTV USA login credentials after payment?",
    answer:
      "Instantly! Once your payment is confirmed, your IPTV USA M3U Playlist, Xtream Codes API credentials, and portal URL are automatically generated and sent to your email address and Telegram within 5 to 15 minutes.",
  },
  {
    category: "Setup",
    question: "Which devices and apps are compatible with IPTV USA?",
    answer:
      "IPTV USA is 100% compatible with virtually every modern streaming device: Amazon Firestick, Fire TV Cube, Android TV (Nvidia Shield, Chromecast with Google TV), Apple TV (via IPTVX or GSE), Smart TVs (Samsung Tizen, LG webOS via IBO Player, Smart IPTV), iOS (iPhone/iPad), Android smartphones, Windows PC, Mac, and dedicated MAG boxes.",
  },
  {
    category: "Streaming",
    question: "What is IPTV USA Anti Freeze 9.3 Technology?",
    answer:
      "Anti Freeze is the proprietary server balancing architecture used by IPTV USA that continuously redistributes stream loads across multi redundant 10Gbps NVMe clusters. Even during high traffic moments like global sports tournament finals or major championship PPV title fights, your IPTV USA stream remains uninterrupted with zero stuttering or buffering.",
  },
  {
    category: "Streaming",
    question: "Can I use a VPN with IPTV USA?",
    answer:
      "Yes, IPTV USA servers are completely VPN friendly. While our IPTV USA streams are secure and do not require a VPN to operate at peak speed, you are free to use any VPN provider of your choice without account throttling.",
  },
  {
    category: "General",
    question: "Can I watch IPTV USA on multiple devices at the same time?",
    answer:
      "Yes! While you can install your IPTV USA credentials on multiple devices, simultaneous streaming depends on the plan you select. We offer 1, 2, and 3 simultaneous connection packages so your entire family can stream different IPTV USA channels at the same time.",
  },
  {
    category: "Payments",
    question: "What payment methods are accepted for IPTV USA subscriptions?",
    answer:
      "We accept all major Credit and Debit Cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Cryptocurrencies (Bitcoin, USDT, Ethereum) for complete anonymity and security when subscribing to IPTV USA.",
  },
  {
    category: "Payments",
    question: "Does IPTV USA offer a Money Back Guarantee?",
    answer:
      "Yes! All 6 month and 12 month IPTV USA subscriptions are backed by our 7 day money back guarantee. If you experience technical difficulties our support team cannot resolve, you are eligible for a full refund within 7 days.",
  },
];
