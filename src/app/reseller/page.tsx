import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Zap, Server, Users, Award, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV Reseller Panel & Subscriptions Program | Start Your Business",
  description:
    "Become an official IPTV USA reseller. Get full access to our Xtream Codes IPTV Reseller Panel with 10Gbps anti-freeze servers, 24k+ channels, and high profit margins.",
  keywords: [
    "IPTV reseller",
    "IPTV reseller panel",
    "buy IPTV credits",
    "IPTV business",
    "Xtream UI reseller",
    "best IPTV reseller program",
  ],
};

export default function ResellerPage() {
  const resellerTiers = [
    {
      name: "Starter Reseller",
      credits: "100 Credits",
      price: "$250",
      perCredit: "$2.50 / credit",
      features: [
        "100 Credits Included",
        "Official Xtream Codes Panel Access",
        "Create 1/3/6/12 Month Accounts",
        "Generate 24h Free Trial Lines",
        "Full Sub-Reseller Control",
        "99.9% Anti-Freeze 9.3 Servers",
        "24/7 WhatsApp VIP Tech Support",
      ],
    },
    {
      name: "Pro Reseller",
      credits: "250 Credits",
      price: "$500",
      perCredit: "$2.00 / credit",
      isPopular: true,
      features: [
        "250 Credits Included",
        "Full Web Control Panel + Sub-Resellers",
        "Unlimited Free Trials (Daily)",
        "Automated M3U & Portal Generation",
        "Brandable DNS / Custom Portal URL",
        "Priority Tier-1 Server Stream Access",
        "Dedicated VIP Account Manager",
      ],
    },
    {
      name: "Master Reseller",
      credits: "500 Credits",
      price: "$850",
      perCredit: "$1.70 / credit",
      features: [
        "500 Credits Included",
        "Highest Margin & Profit Potential",
        "Custom DNS & Whitelabel Branding",
        "Create Unlimited Sub-Resellers",
        "Direct Load Balancer Allocation",
        "Bulk Account Management",
        "Direct Phone / WhatsApp Priority Assistance",
      ],
    },
  ];

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Users size={14} /> Official IPTV USA Reseller Program
          </span>
          <h1 className="section-title">
            Start Your Own <span className="text-blue">IPTV Business</span> Today
          </h1>
          <p className="section-subtitle">
            Join thousands of successful partners selling the highest-rated IPTV service in the USA and Canada. Get access to an intuitive control panel and keep up to 80% profit margins.
          </p>
        </div>

        {/* Reseller Plans Grid */}
        <div className="grid-3" style={{ marginBottom: "60px" }}>
          {resellerTiers.map((tier, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderColor: tier.isPopular ? "var(--color-green)" : "var(--border-subtle)",
                boxShadow: tier.isPopular ? "var(--shadow-green), var(--shadow-md)" : "var(--shadow-sm)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff" }}>
                    {tier.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: tier.isPopular ? "var(--color-green)" : "rgba(255,255,255,0.08)",
                      color: tier.isPopular ? "#050811" : "var(--text-secondary)",
                    }}
                  >
                    {tier.credits}
                  </span>
                </div>

                <div style={{ padding: "16px 0", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", marginBottom: "20px" }}>
                  <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#fff" }}>
                    {tier.price}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-green)", fontWeight: 600 }}>
                    {tier.perCredit}
                  </div>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                  {tier.features.map((feat, i) => (
                    <li key={i} style={{ fontSize: "0.875rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircle2 size={16} color="var(--color-green)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello%20IPTV%20USA%20Pro%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(tier.name)}%20(${tier.credits})%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${tier.isPopular ? "btn-green" : "btn-primary"}`}
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Zap size={16} />
                Activate Reseller Panel
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
