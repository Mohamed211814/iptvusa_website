import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Michael Turner",
      location: "New York, USA",
      rating: 5,
      comment:
        "Switching to IPTV USA was one of the best decisions I made for my home entertainment setup. The picture quality is crystal clear in 4K, and I have not experienced any lag or buffering even during the biggest live championship games.",
    },
    {
      name: "David Mitchell",
      location: "Texas, USA",
      rating: 5,
      comment:
        "I have tried several IPTV services, but none compare to IPTV USA in terms of stability and channel selection. With over 24,000 live channels and 110,000+ movies on demand, IPTV USA is unmatched for value.",
    },
    {
      name: "Robert Hayes",
      location: "California, USA",
      rating: 5,
      comment:
        "Customer service is truly top tier. I needed a little help setting up IPTV USA on my Firestick, and the support team responded on Telegram within minutes and had me streaming right away. Highly recommend IPTV USA to anyone!",
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: "rgba(10, 14, 24, 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ color: "#ffffff" }}>
            What Say <span className="text-blue">IPTV USA</span> Clients ?
          </h2>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            See real reviews and feedback from verified IPTV USA subscribers streaming on Firestick, Smart TVs, and mobile devices across the United States.
          </p>
        </div>

        <div className="grid-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px 24px",
              }}
            >
              <div>
                <div style={{ display: "flex", color: "#f59e0b", marginBottom: "16px" }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-main)",
                    lineHeight: 1.65,
                    marginBottom: "24px",
                    fontStyle: "italic",
                  }}
                >
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "#000000", display: "flex", alignItems: "center", gap: "6px" }}>
                    {rev.name}
                    <CheckCircle2 size={16} color="var(--color-green)" />
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    {rev.location}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: "rgba(28, 231, 131, 0.1)",
                    color: "var(--color-green)",
                  }}
                >
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
