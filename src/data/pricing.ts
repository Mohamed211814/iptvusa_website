export interface PricingPlan {
  id: string;
  durationMonths: number;
  name: string;
  badge?: string;
  isPopular?: boolean;
  prices: {
    [connections: number]: {
      current: number;
      original: number;
      monthlyEquivalent: number;
    };
  };
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-1m",
    durationMonths: 1,
    name: "1 Month",
    badge: "17% Discount !",
    prices: {
      1: { current: 14.95, original: 19.99, monthlyEquivalent: 14.95 },
      2: { current: 24.95, original: 34.99, monthlyEquivalent: 24.95 },
      3: { current: 34.95, original: 44.99, monthlyEquivalent: 34.95 },
    },
    features: [
      "+24,000 Channels",
      "+110,000 VOD",
      "4K & Full HD Quality",
      "Live Sports & PPV Events",
      "Anti Freeze 9.3 Technology",
      "Catch Up & 7 Day Replay",
      "Instant Activation!",
      "All devices supported",
      "Server Stability 99%",
      "EPG updated",
      "24/7 Support",
    ],
  },
  {
    id: "plan-3m",
    durationMonths: 3,
    name: "3 Months",
    badge: "Save 30%",
    prices: {
      1: { current: 29.95, original: 44.99, monthlyEquivalent: 9.98 },
      2: { current: 49.95, original: 74.99, monthlyEquivalent: 16.65 },
      3: { current: 69.95, original: 99.99, monthlyEquivalent: 23.31 },
    },
    features: [
      "+24,000 Channels",
      "+110,000 VOD",
      "4K & Full HD Quality",
      "Live Sports & PPV Events",
      "Anti Freeze 9.3 Technology",
      "Catch Up & 7 Day Replay",
      "Instant Activation!",
      "All devices supported",
      "Server Stability 99%",
      "EPG updated",
      "24/7 Support",
    ],
  },
  {
    id: "plan-6m",
    durationMonths: 6,
    name: "6 Months",
    badge: "Save 45%",
    prices: {
      1: { current: 44.95, original: 79.99, monthlyEquivalent: 7.49 },
      2: { current: 74.95, original: 129.99, monthlyEquivalent: 12.49 },
      3: { current: 99.95, original: 169.99, monthlyEquivalent: 16.65 },
    },
    features: [
      "+24,000 Channels",
      "+110,000 VOD",
      "4K & Full HD Quality",
      "Live Sports & PPV Events",
      "Anti Freeze 9.3 Technology",
      "Catch Up & 7 Day Replay",
      "Instant Activation!",
      "All devices supported",
      "Server Stability 99%",
      "EPG updated",
      "24/7 Support",
    ],
  },
  {
    id: "plan-12m",
    durationMonths: 12,
    name: "12 Months",
    badge: "🔥 Best Value Save 65%",
    isPopular: true,
    prices: {
      1: { current: 59.95, original: 149.99, monthlyEquivalent: 4.99 },
      2: { current: 99.95, original: 219.99, monthlyEquivalent: 8.32 },
      3: { current: 139.95, original: 299.99, monthlyEquivalent: 11.66 },
    },
    features: [
      "+24,000 Channels",
      "+110,000 VOD",
      "4K & Full HD Quality",
      "Live Sports & PPV Events",
      "Anti Freeze 9.3 Technology",
      "Catch Up & 7 Day Replay",
      "Instant Activation!",
      "All devices supported",
      "Server Stability 99%",
      "EPG updated",
      "24/7 Support",
    ],
  },
];
