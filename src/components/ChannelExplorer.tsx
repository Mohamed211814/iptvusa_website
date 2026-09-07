"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { channelCategories, ChannelCategory } from "@/data/channels";
import { Search, Tv, Trophy, Film, Globe, Sparkles, Check, ArrowRight, Zap } from "lucide-react";

export const ChannelExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = useMemo(() => {
    return channelCategories
      .filter((cat) => {
        if (selectedCategory === "all") return true;
        return cat.id === selectedCategory;
      })
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const query = searchQuery.toLowerCase();
        const matchedChannels = cat.sampleChannels.filter((ch) =>
          ch.toLowerCase().includes(query)
        );
        const nameMatches = cat.name.toLowerCase().includes(query);
        if (nameMatches || matchedChannels.length > 0) {
          return {
            ...cat,
            sampleChannels: matchedChannels.length > 0 ? matchedChannels : cat.sampleChannels,
          };
        }
        return null;
      })
      .filter(Boolean) as ChannelCategory[];
  }, [selectedCategory, searchQuery]);

  return (
    <section id="channels-preview" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Tv size={14} /> 24,000+ IPTV USA Channels & 110,000+ VODs
          </span>
          <h2 className="section-title">
            Explore <span className="text-blue">IPTV USA</span> Live Channel Lineup
          </h2>
          <p className="section-subtitle">
            Discover the full IPTV USA channel catalog with live sports, cinema networks, international packages, and local state stations in brilliant 4K UHD and FHD resolution.
          </p>
        </div>

        {/* Search and Category Filter Bar */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            padding: "20px",
            marginBottom: "36px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-muted)",
                }}
              />
              <input
                type="text"
                placeholder="Search channels (e.g. Sports, News, Movies, Cinema, Football, Live Events)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 46px",
                  background: "#ffffff",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "var(--radius-full)",
                  color: "#000000",
                  fontSize: "0.95rem",
                  outline: "none",
                  boxShadow: "var(--shadow-sm)",
                }}
              />
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <button
                onClick={() => setSelectedCategory("all")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  background: selectedCategory === "all" ? "var(--primary)" : "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  border: "1px solid",
                  borderColor: selectedCategory === "all" ? "var(--primary)" : "rgba(255, 255, 255, 0.2)",
                  cursor: "pointer",
                }}
              >
                All Categories
              </button>
              {channelCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    background: selectedCategory === cat.id ? "var(--primary)" : "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    border: "1px solid",
                    borderColor: selectedCategory === cat.id ? "var(--primary)" : "rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid-2" style={{ gap: "24px" }}>
          {filteredCategories.length === 0 ? (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "40px",
                color: "var(--text-muted)",
              }}
            >
              No channels found matching &quot;{searchQuery}&quot;. Try searching for &quot;Sports&quot; or &quot;Cinema&quot;.
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="card-glass"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "14px",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#000000" }}>
                      {cat.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        padding: "4px 10px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(0, 85, 255, 0.08)",
                        color: "var(--primary)",
                        border: "1px solid rgba(0, 85, 255, 0.2)",
                        fontWeight: 600,
                      }}
                    >
                      {cat.count}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "18px" }}>
                    {cat.description}
                  </p>

                  <div
                    style={{
                      background: "#f8fafc",
                      borderRadius: "10px",
                      padding: "14px",
                      border: "1px solid var(--border-subtle)",
                      marginBottom: "18px",
                    }}
                  >
                    <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#64748b", marginBottom: "8px", letterSpacing: "0.05em", fontWeight: 600 }}>
                      Featured Live Broadcasts:
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {cat.sampleChannels.slice(0, 6).map((ch, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: "0.85rem",
                            color: "#000000",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontWeight: 500,
                          }}
                        >
                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)" }} />
                          {ch}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    paddingTop: "14px",
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {cat.features.map((f, i) => (
                      <span key={i} style={{ fontSize: "0.75rem", color: "#10b981", display: "flex", alignItems: "center", gap: "4px" }}>
                        <Check size={12} /> {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/pricing"
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--primary)",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Unlock Channels <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View Full Catalog CTA */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            padding: "28px 20px",
            background: "#ffffff",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-sm)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <p style={{ fontSize: "1.05rem", color: "#000000", fontWeight: 700, marginBottom: "14px" }}>
            Looking for a specific regional channel, sport event, or international bouquet?
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/channels" className="btn btn-secondary">
              View Complete Channel Directory
            </Link>
            <Link href="/pricing" className="btn btn-primary">
              <Zap size={16} />
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
