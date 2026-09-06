export interface ChannelCategory {
  id: string;
  name: string;
  count: string;
  icon: string;
  description: string;
  sampleChannels: string[];
  features: string[];
}

export const channelCategories: ChannelCategory[] = [
  {
    id: "usa-sports",
    name: "USA Live Sports & Major PPV",
    count: "4,500+ Channels",
    icon: "Trophy",
    description: "All live sporting events in FHD & Ultra 4K 60FPS with zero buffering.",
    sampleChannels: [
      "Live Pro Football & Sunday Game Feeds",
      "National Basketball Live Feeds & Full Season Pass",
      "Major League Baseball & Championship Series",
      "Professional Hockey & Winter League Coverage",
      "Live Combat Sports, Boxing & Title Fight PPV Events",
      "Motor Racing, Tennis Grand Slams & Golf Tours",
      "24/7 Premium Live Sports Networks",
      "College Athletics, Soccer & Regional Sports Feeds",
    ],
    features: ["4K & FHD 60FPS", "No Blackouts", "All Major PPV Included", "Anti Freeze 9.3"],
  },
  {
    id: "usa-entertainment",
    name: "USA Premium Entertainment & Cinema",
    count: "3,800+ Channels",
    icon: "Tv",
    description: "Premium American cable networks, movie channels, series and reality television.",
    sampleChannels: [
      "Premium Cinema Channels (East & West Coast Feeds)",
      "Top Drama & Prime Time Television Networks",
      "Comedy, Sitcoms & Late Night Entertainment",
      "Documentary, Science, Wildlife & Nature Exploration Channels",
      "Lifestyle, Cooking, Home & Travel Networks",
      "Music Channels, Concerts & Pop Culture Feeds",
      "Family Entertainment, Kids & Animation Channels",
      "Classic Television & Nostalgia Networks",
    ],
    features: ["7 Day Catch Up", "Full EPG TV Guide", "Dual Audio Available"],
  },
  {
    id: "usa-news",
    name: "USA News & Regional Stations",
    count: "2,200+ Channels",
    icon: "Radio",
    description: "Live national news and major city regional affiliates across all 50 states.",
    sampleChannels: [
      "24/7 National Breaking News Networks",
      "Financial, Stock Market & Global Economy Feeds",
      "Regional State Affiliates (All 50 States Regional Coverage)",
      "Live Weather Forecast & Storm Radar Feeds",
      "Public Affairs & Independent Investigative Journalism",
      "Major Metropolitan City Local Broadcasts",
    ],
    features: ["Local State Affiliates", "24/7 Live Stream", "Real Time Updates"],
  },
  {
    id: "vod-movies",
    name: "VOD Movies & Cinema Releases (4K)",
    count: "95,000+ Movies",
    icon: "Film",
    description: "The latest theatrical releases, cinema classics, and acclaimed originals in Ultra 4K HDR.",
    sampleChannels: [
      "2024 to 2026 Theatrical Premieres in 4K HDR",
      "Complete Superhero & Sci Fi Blockbuster Sagas",
      "Academy Award Winners & Classic Cinema Collections",
      "Action, Thriller, Mystery, Horror & Family Cinema",
      "Multi language Subtitles (English, Spanish, French, Arabic, German)",
      "Independent & World Festival Award Winning Films",
    ],
    features: ["Dolby Digital 5.1 / Atmos", "HDR10 & 4K UHD", "Weekly Updates"],
  },
  {
    id: "vod-series",
    name: "VOD Television Series & Box Sets",
    count: "25,000+ Series",
    icon: "Clapperboard",
    description: "Binge complete series and trending seasons from top entertainment studios.",
    sampleChannels: [
      "Top Rated Award Winning Drama Series",
      "Complete Seasons of Trending Streaming Originals",
      "Classic Sitcoms & Vintage Box Sets from 1980s to Present",
      "Docuseries, True Crime Mysteries & Limited Mini Series",
      "Animated Series & Family Entertainment",
      "Sci Fi & Fantasy Epic Series (All Seasons Complete)",
    ],
    features: ["All Episodes Complete", "Resume Playback", "Auto Subtitles"],
  },
  {
    id: "international",
    name: "Canada, UK & International Channels",
    count: "8,500+ Channels",
    icon: "Globe",
    description: "Worldwide live television from Canada, United Kingdom, Latin America, Europe and beyond.",
    sampleChannels: [
      "United Kingdom: Live Sports, News, Entertainment & Documentaries",
      "Canada: Live National Sports, French & English Public Stations",
      "Latin America & Spanish: Live Sports, Telenovelas & Regional Feeds",
      "Europe: France, Germany, Italy, Spain, Portugal & Nordic Networks",
      "Arabic, African & Asian Premium Regional Bouquets",
      "Caribbean & South American International Packages",
    ],
    features: ["Country Sorted Groups", "Fast Server CDN", "Original Audio"],
  },
];
