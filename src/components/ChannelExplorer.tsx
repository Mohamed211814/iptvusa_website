"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { channelCategories, ChannelCategory } from "@/data/channels";
import { Search, Tv, Trophy, Film, Globe, Sparkles, Check, ArrowRight } from "lucide-react";

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
            <Tv size={14} /> 25,000+ Channels & 120,000+ VODs
          </span>
          <h2 className="section-title">
            Explore Our <span className="highlight">Live Channel</span> Lineup
          </h2>
          <p className="section-subtitle">
            All the major sports leagues, movie networks, international bouquets, and local state stations in brilliant 4K UHD and FHD resolution.
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
                placeholder="Search channels (e.g. ESPN, HBO, NFL RedZone, UFC, NBC, Sky Sports)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 46px",
                  background: "rgba(6, 9, 17, 0.8)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-full)",
                  color: "#fff",
                  fontSize: "0.95rem",
                  outline: "none",
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
                  background: selectedCategory === "all" ? "var(--primary)" : "rgba(255, 255, 255, 0.05)",
                  color: selectedCategory === "all" ? "#000" : "var(--text-secondary)",
                  border: "1px solid",
                  borderColor: selectedCategory === "all" ? "var(--primary)" : "var(--border-subtle)",
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
                    background: selectedCategory === cat.id ? "var(--primary)" : "rgba(255, 255, 255, 0.05)",
                    color: selectedCategory === cat.id ? "#000" : "var(--text-secondary)",
                    border: "1px solid",
                    borderColor: selectedCategory === cat.id ? "var(--primary)" : "var(--border-subtle)",
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
              No channels found matching &quot;{searchQuery}&quot;. Try searching for &quot;ESPN&quot; or &quot;HBO&quot;.
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
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>
                      {cat.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        padding: "4px 10px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(0, 229, 255, 0.1)",
                        color: "var(--primary)",
                        border: "1px solid rgba(0, 229, 255, 0.25)",
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
                      background: "rgba(0, 0, 0, 0.3)",
                      borderRadius: "10px",
                      padding: "14px",
                      border: "1px solid var(--border-subtle)",
                      marginBottom: "18px",
                    }}
                  >
                    <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px", letterSpacing: "0.05em" }}>
                      Featured Live Broadcasts:
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {cat.sampleChannels.slice(0, 6).map((ch, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: "0.85rem",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
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
            padding: "24px",
            background: "rgba(0, 229, 255, 0.04)",
            border: "1px dashed rgba(0, 229, 255, 0.3)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <p style={{ fontSize: "1rem", color: "#fff", marginBottom: "12px" }}>
            Looking for a specific regional channel, sport event, or international bouquet?
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/channels" className="btn btn-secondary">
              View Complete Channel Directory
            </Link>
            <Link href="/free-trial" className="btn btn-primary">
              <Sparkles size={16} />
              Test 24 Hours Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
