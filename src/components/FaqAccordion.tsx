"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const iptvUsaFaqs = [
    {
      question: "What is IPTV USA?",
      answer:
        "IPTV USA is a premium streaming service providing online access to over 24,000 live television channels and 110,000+ movies and TV series directly through your high speed internet connection. It eliminates traditional cable and satellite subscriptions, allowing you to stream in full 4K and FHD on any device.",
    },
    {
      question: "How many channels does IPTV USA offer?",
      answer:
        "IPTV USA offers over 24,000 live television channels from the United States, Canada, the United Kingdom, and around the world, along with a massive catalog of more than 110,000 on demand movies and full series updated daily.",
    },
    {
      question: "What devices are compatible with IPTV USA?",
      answer:
        "IPTV USA is compatible with virtually all modern devices: Amazon Firestick, Fire TV Cube, Android TV (Nvidia Shield, Google TV), Smart TVs (Samsung Tizen and LG webOS via IBO Player, Smart IPTV), Apple TV, iPhone, iPad, Windows PC, Mac, and dedicated MAG boxes.",
    },
    {
      question: "Is IPTV USA legal?",
      answer:
        "IPTV technology itself is completely legal. IPTV simply delivers television content over internet protocols rather than traditional cable lines. We recommend users comply with the terms of service in their region.",
    },
    {
      question: "How quickly do I receive my subscription details?",
      answer:
        "Activation is instantaneous! As soon as your order is confirmed, your M3U playlist link, Xtream Codes API credentials, and server portal information are sent directly to your email address and Telegram within 5 minutes.",
    },
    {
      question: "Can I use IPTV USA while traveling or with a VPN?",
      answer:
        "Yes! IPTV USA works anywhere in the world as long as you have an internet connection. Our servers are 100% VPN friendly and do not restrict or throttle connections through popular VPN providers.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-blue">IPTV USA</span> FAQs
          </h2>
          <p className="section-subtitle">
            Find immediate answers to frequently asked questions about IPTV USA subscription, channel lineups, device compatibility, and instant setup.
          </p>
        </div>

        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {iptvUsaFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  background: isOpen ? "rgba(14, 22, 40, 0.85)" : "rgba(11, 16, 28, 0.65)",
                  border: "1px solid",
                  borderColor: isOpen ? "rgba(0, 85, 255, 0.4)" : "var(--border-subtle)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: "100%",
                    padding: "clamp(14px, 3vw, 20px) clamp(16px, 3vw, 24px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "transparent",
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
                    fontWeight: 700,
                    cursor: "pointer",
                    gap: "14px",
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    color={isOpen ? "var(--color-blue-bright)" : "var(--text-muted)"}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 clamp(16px, 3vw, 24px) clamp(16px, 3vw, 22px) clamp(16px, 3vw, 24px)",
                      fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                      paddingTop: "16px",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
