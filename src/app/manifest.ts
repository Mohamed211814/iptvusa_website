import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IPTV USA Pro - Official IPTV Subscription",
    short_name: "IPTV USA",
    description: "Official IPTV USA subscription offering over 24,000 live channels and 110,000+ VODs.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090f",
    theme_color: "#0055ff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
