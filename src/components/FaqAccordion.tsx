"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs, FAQItem } from "@/data/faqs";

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Setup", "Channels", "Payments", "Streaming"];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <HelpCircle size={14} /> Clear Answers to Common Questions
          </span>
          <h2 className="section-title">
            <span className="text-blue">IPTV USA</span> FAQs
          </h2>
          <p className="section-subtitle">
            Find immediate answers to frequently asked questions about legality, setup, subscription pricing, Indian channels, and device compatibility.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "36px",
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  background: isSelected ? "var(--color-blue)" : "#ffffff",
                  color: isSelected ? "#ffffff" : "#000000",
                  border: "1px solid",
                  borderColor: isSelected ? "var(--color-blue)" : "var(--border-subtle)",
                  boxShadow: isSelected ? "0 4px 14px rgba(0, 85, 255, 0.25)" : "var(--shadow-sm)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {cat === "All" ? "All FAQs" : cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  background: isOpen ? "#f8fafc" : "#ffffff",
                  border: "1px solid",
                  borderColor: isOpen ? "var(--color-blue)" : "var(--border-subtle)",
                  borderRadius: "12px",
                  boxShadow: isOpen ? "0 4px 18px rgba(0, 85, 255, 0.09)" : "var(--shadow-sm)",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: "100%",
                    padding: "clamp(16px, 3vw, 20px) clamp(16px, 3vw, 24px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "transparent",
                    textAlign: "left",
                    color: "#000000",
                    fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
                    fontWeight: 700,
                    cursor: "pointer",
                    gap: "14px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "4px",
                        background: "rgba(0, 85, 255, 0.1)",
                        color: "var(--color-blue)",
                        textTransform: "uppercase",
                      }}
                    >
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </div>

                  <ChevronDown
                    size={20}
                    color={isOpen ? "var(--color-blue)" : "#64748b"}
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
                      padding: "0 clamp(16px, 3vw, 24px) clamp(18px, 3vw, 24px) clamp(16px, 3vw, 24px)",
                      fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
                      color: "#1e293b",
                      lineHeight: 1.75,
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: "16px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Natural Internal Links Banner */}
        <div
          style={{
            marginTop: "36px",
            textAlign: "center",
            padding: "24px 20px",
            background: "#ffffff",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
            Have More Questions About Our IPTV USA Subscription?
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "16px", maxWidth: "560px", margin: "0 auto 16px auto" }}>
            Our 24/7 customer assistance desk is ready to help you with activation, playlist setup on any device, and channel requests.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ fontSize: "0.85rem", padding: "10px 18px" }}>
              Contact Customer Support
            </Link>
            <Link href="/pricing" className="btn btn-primary" style={{ fontSize: "0.85rem", padding: "10px 18px" }}>
              View IPTV Subscription Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
