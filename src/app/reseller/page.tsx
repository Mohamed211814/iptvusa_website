import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Zap, Server, Users, Award, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV USA Reseller Panel & Subscriptions Program | Start Your Business",
  description:
    "Become an official IPTV USA reseller. Get full access to our IPTV USA Xtream Codes Reseller Panel with 10Gbps anti freeze servers, 24,000+ channels, and high profit margins.",
  keywords: [
    "IPTV USA reseller",
    "IPTV USA reseller panel",
    "buy IPTV USA credits",
    "IPTV USA business",
    "IPTV USA Xtream panel",
    "best IPTV USA reseller program",
  ],
};

export default function ResellerPage() {
  const resellerTiers = [
    {
      name: "Starter IPTV USA Reseller",
      credits: "100 Credits",
      price: "$250",
      perCredit: "$2.50 / credit",
      features: [
        "100 IPTV USA Credits Included",
        "Official IPTV USA Panel Access",
        "Create 1, 3, 6, and 12 Month Accounts",
        "Generate IPTV USA 24h Free Trials",
        "Full Sub-Reseller Control",
        "99.9% Anti Freeze 9.3 Server Speed",
        "24/7 WhatsApp VIP Tech Support",
      ],
    },
    {
      name: "Pro IPTV USA Reseller",
      credits: "250 Credits",
      price: "$500",
      perCredit: "$2.00 / credit",
      isPopular: true,
      features: [
        "250 IPTV USA Credits Included",
        "Full IPTV USA Web Control Panel",
        "Unlimited Daily IPTV USA Free Trials",
        "Automated M3U and Portal Generation",
        "Brandable DNS and Custom Portal URL",
        "Priority Tier 1 IPTV USA Server Stream Access",
        "Dedicated VIP Account Manager",
      ],
    },
    {
      name: "Master IPTV USA Reseller",
      credits: "500 Credits",
      price: "$850",
      perCredit: "$1.70 / credit",
      features: [
        "500 IPTV USA Credits Included",
        "Highest Margin and Profit Potential",
        "Custom DNS and Whitelabel Branding",
        "Create Unlimited Sub-Resellers",
        "Direct Load Balancer Allocation",
        "Bulk IPTV USA Account Management",
        "Priority VIP Assistance",
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
            Start Your Own <span className="text-blue">IPTV USA Business</span> Today
          </h1>
          <p className="section-subtitle">
            Join thousands of successful partners selling the highest rated IPTV USA service in the United States and Canada. Get access to an intuitive IPTV USA control panel and keep up to 80% profit margins.
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
                Activate IPTV USA Reseller Panel
              </a>
            </div>
          ))}
        </div>

        {/* Reseller Benefits Section */}
        <div style={{ marginTop: "40px" }}>
          <div className="section-header" style={{ marginBottom: "30px" }}>
            <h2 className="section-title" style={{ fontSize: "1.7rem" }}>
              Why Choose the <span className="text-blue">IPTV USA</span> Reseller Program?
            </h2>
            <p className="section-subtitle">
              IPTV USA provides resellers with cutting edge streaming infrastructure and complete independence to grow a recurring income stream.
            </p>
          </div>

          <div className="grid-3">
            <div className="card-glass">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                High Profit Margin
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Buy IPTV USA credits at wholesale rates starting from $1.70 and sell subscriptions at retail prices to make substantial profit on every customer.
              </p>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                Zero Maintenance Overhead
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Our engineers manage server uptime, feed updates, EPG electronic program guides, and VOD uploads so you can focus entirely on customer acquisition.
              </p>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                Credits Never Expire
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Your purchased IPTV USA credits remain in your balance indefinitely until you allocate them to new or renewing subscriber accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
