import React from "react";
import { siteConfig } from "@/config/site";
import { pricingPlans } from "@/data/pricing";

export const ProductOffersSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product-service`,
        name: "IPTV USA Official Subscription",
        description:
          "Official IPTV USA subscription service with 24,000+ live TV channels, 110,000+ VOD movies and TV series, live sports feeds, and Anti Freeze 9.3 servers in 4K FHD quality.",
        brand: {
          "@type": "Brand",
          name: siteConfig.shortName,
        },
        category: "Subscription > Streaming Media",
        image: `${siteConfig.url}/images/iptv_player_screen.webp`,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "14.95",
          highPrice: "59.95",
          offerCount: pricingPlans.length.toString(),
          offers: pricingPlans.map((plan) => ({
            "@type": "Offer",
            name: `IPTV USA ${plan.name} Plan`,
            price: plan.prices[1].current.toFixed(2),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${siteConfig.url}/pricing`,
            priceValidUntil: "2027-12-31",
            seller: {
              "@id": `${siteConfig.url}/#organization`,
            },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
