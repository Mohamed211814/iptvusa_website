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
    name: "USA Premium Sports & PPV",
    count: "4,500+ Channels",
    icon: "Trophy",
    description: "All live sporting events in FHD & Ultra 4K 60FPS with zero buffering.",
    sampleChannels: [
      "ESPN / ESPN 2 / ESPNews / ESPNU",
      "Fox Sports 1 (FS1) & FS2",
      "NFL Sunday Ticket & RedZone",
      "NBA TV & League Pass (All Games)",
      "MLB Extra Innings & Network",
      "NHL Center Ice & Network",
      "CBS Sports Network & NBC Sports",
      "UFC Fight Pass & All Major PPV Events",
      "WWE Network & Box Office",
      "DAZN US / TNT Sports / Golf Channel",
    ],
    features: ["4K & FHD 60FPS", "No Blackouts", "All Major PPV Included", "Anti Freeze 9.3"],
  },
  {
    id: "usa-entertainment",
    name: "USA Entertainment & Cinema",
    count: "3,800+ Channels",
    icon: "Tv",
    description: "Premium American cable networks, movie channels, series and reality shows.",
    sampleChannels: [
      "HBO / Cinemax / Showtime / Starz (East & West)",
      "AMC / FX / FXX / USA Network",
      "TBS / TNT / Paramount Network / Bravo",
      "Discovery Channel / History / TLC",
      "National Geographic / Nat Geo Wild",
      "Comedy Central / MTV / VH1 / BET",
      "Hallmark Channel & Movies",
      "A&E / HGTV / Food Network / Travel",
    ],
    features: ["7 Day Catch Up", "Full EPG TV Guide", "Dual Audio Available"],
  },
  {
    id: "usa-news",
    name: "USA News & Local Networks",
    count: "2,200+ Channels",
    icon: "Radio",
    description: "Live national news and major city regional affiliates (ABC, CBS, NBC, FOX).",
    sampleChannels: [
      "CNN / Fox News / MSNBC / CNBC / Bloomberg",
      "ABC / CBS / NBC / FOX (NY, LA, Chicago, Miami, Dallas & all states)",
      "Weather Channel / AccuWeather",
      "C SPAN 1, 2 & 3",
      "Newsmax / BBC America / Scripps News",
    ],
    features: ["Local State Affiliates", "24/7 Live Stream", "Real Time Updates"],
  },
  {
    id: "vod-movies",
    name: "VOD Movies & Box Office (4K)",
    count: "95,000+ Movies",
    icon: "Film",
    description: "The latest theatrical releases, Hollywood classics, Netflix, Disney+, Apple TV originals.",
    sampleChannels: [
      "2024 to 2026 Theatrical Premieres in 4K HDR",
      "Complete Marvel & DC Cinematic Universes",
      "Full Academy Award & Classic Cinema collections",
      "Action, Thriller, Sci Fi, Horror & Romance",
      "Multi language Subtitles (EN, ES, FR, AR, DE)",
    ],
    features: ["Dolby Digital 5.1 / Atmos", "HDR10 & 4K UHD", "Weekly Updates"],
  },
  {
    id: "vod-series",
    name: "VOD TV Shows & Complete Series",
    count: "25,000+ Series",
    icon: "Clapperboard",
    description: "Binge complete box sets of trending series from all major streaming giants.",
    sampleChannels: [
      "HBO Max Originals & Hit Series",
      "Netflix & Amazon Prime Video Series",
      "Apple TV+ Originals & Disney+ Specials",
      "Hulu, Paramount+ & Peacock Exclusives",
      "Vintage Classic Series from 1980s to Present",
    ],
    features: ["All Episodes Complete", "Resume Playback", "Auto Subtitles"],
  },
  {
    id: "international",
    name: "Canada, UK & International",
    count: "8,500+ Channels",
    icon: "Globe",
    description: "Worldwide live television from Canada, United Kingdom, Latin America, and Europe.",
    sampleChannels: [
      "UK: Sky Sports, TNT Sports, BBC, ITV, Channel 4",
      "Canada: TSN 1 to 5, Sportsnet, CBC, CTV, Global",
      "Latino & Spanish: Telemundo, Univision, TUDN, ESPN Deportes",
      "Europe: France, Germany, Italy, Portugal, Poland & Nordic",
      "Arabic, African & Asian Premium Bouquets",
    ],
    features: ["Country Sorted Groups", "Fast Server CDN", "Original Audio"],
  },
];
