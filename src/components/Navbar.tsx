"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Tv, Menu, X, Headphones, Sparkles, Zap } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Channels list", href: "/channels" },
    { name: "Setup Guides", href: "/setup-guide" },
    { name: "Reseller", href: "/reseller" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          height: "var(--header-height)",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.96)"
            : "rgba(255, 255, 255, 0.90)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-subtle)",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.06)" : "none",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #0055ff 0%, #1ce783 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 16px rgba(0, 85, 255, 0.4)",
                flexShrink: 0,
              }}
            >
              <Tv size={22} color="#050811" strokeWidth={2.5} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  lineHeight: 1.1,
                }}
              >
                IPTV <span style={{ color: "var(--color-blue-bright)" }}>USA</span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    background: "var(--color-green)",
                    color: "#ffffff",
                    borderRadius: "4px",
                    letterSpacing: "0.05em",
                  }}
                >
                  PRO
                </span>
              </div>
              <div
                className="logo-subtext"
                style={{
                  fontSize: "0.65rem",
                  color: "#475569",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginTop: "2px",
                }}
              >
                Official IPTV Subscription
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "28px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: isActive ? "var(--color-blue-bright)" : "var(--text-main)",
                    transition: "color 0.2s ease",
                    position: "relative",
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-6px",
                        left: "0",
                        width: "100%",
                        height: "2px",
                        background: "var(--color-blue-bright)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Link
              href="/contact"
              className="btn btn-primary nav-contact-btn"
              style={{
                padding: "9px 18px",
                fontSize: "0.85rem",
                borderRadius: "8px",
              }}
            >
              <Headphones size={15} />
              <span>Contact us</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                background: "rgba(0, 0, 0, 0.05)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000000",
                cursor: "pointer",
                flexShrink: 0,
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 99,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            borderTop: "1px solid var(--border-subtle)",
            overflowY: "auto",
            maxHeight: "calc(100vh - var(--header-height))",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: "13px 16px",
                fontSize: "1rem",
                fontWeight: 600,
                color: pathname === link.href ? "var(--color-blue-bright)" : "#000000",
                background:
                  pathname === link.href
                    ? "rgba(0, 85, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.02)",
                borderRadius: "8px",
                border: "1px solid",
                borderColor:
                  pathname === link.href
                    ? "rgba(0, 85, 255, 0.3)"
                    : "transparent",
              }}
            >
              {link.name}
            </Link>
          ))}

          <div style={{ marginTop: "auto", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-green"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Zap size={18} />
              View Pricing ($14.95 / mo)
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Headphones size={18} />
              Contact 24/7 Support
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .nav-contact-btn {
            display: none !important;
          }
          .logo-subtext {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
