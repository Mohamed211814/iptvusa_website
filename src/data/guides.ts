export interface SetupGuide {
  id: string;
  device: string;
  recommendedApp: string;
  badge: string;
  difficulty: "Easy" | "Medium";
  timeMinutes: number;
  steps: {
    title: string;
    description: string;
    code?: string;
  }[];
}

export const setupGuides: SetupGuide[] = [
  {
    id: "firestick",
    device: "Amazon Firestick / Fire TV",
    recommendedApp: "IPTV Smarters Pro / TiviMate / XCIPTV",
    badge: "Most Popular",
    difficulty: "Easy",
    timeMinutes: 4,
    steps: [
      {
        title: "Install the Downloader App",
        description: "Go to Find, then Search on your Firestick home screen, type Downloader, select the orange Downloader icon and install it.",
      },
      {
        title: "Enable Developer Options",
        description: "Go to Firestick Settings, then My Fire TV, then Developer Options, then Install unknown apps, then Enable Downloader (Set to ON).",
      },
      {
        title: "Download IPTV Smarters Pro",
        description: "Open the Downloader app and enter the quick download code in the URL box:",
        code: "78522 (or firestick.iptvusa-pro.com)",
      },
      {
        title: "Login with your IPTV USA Xtream Codes API",
        description: "Launch the app, choose Login with Xtream Codes API, enter your username, password, and portal server URL provided in your activation email.",
      },
    ],
  },
  {
    id: "android-tv",
    device: "Android TV / Google TV / Nvidia Shield",
    recommendedApp: "TiviMate IPTV Player / IPTV Smarters Pro",
    badge: "Best Player",
    difficulty: "Easy",
    timeMinutes: 3,
    steps: [
      {
        title: "Open Google Play Store",
        description: "On your Android TV or Google TV box, launch the Google Play Store.",
      },
      {
        title: "Install TiviMate IPTV Player",
        description: "Search for TiviMate IPTV Player and click Install.",
      },
      {
        title: "Add your IPTV USA Playlist",
        description: "Open TiviMate, select Add Playlist, choose Xtream Codes, then enter the Server URL, Username, and Password sent upon order.",
      },
      {
        title: "Enjoy 4K Live Sports & TV",
        description: "Wait 15 seconds for channels and EPG TV Guide to load, then enjoy seamless buffer free streaming.",
      },
    ],
  },
  {
    id: "smart-tv",
    device: "Samsung & LG Smart TVs",
    recommendedApp: "IBO Player / Smart IPTV / Nanomid",
    badge: "No Box Needed",
    difficulty: "Easy",
    timeMinutes: 5,
    steps: [
      {
        title: "Install IBO Player from TV App Store",
        description: "Open the LG Content Store or Samsung Apps on your TV, search for IBO Player and install it.",
      },
      {
        title: "Find your Device ID & Device Key",
        description: "Open IBO Player; your screen will display a unique Device ID and Device Key (MAC Address).",
      },
      {
        title: "Link your IPTV USA Subscription",
        description: "Send your Device ID and Key to our 24/7 WhatsApp support or upload your M3U link directly to the IBO Player management portal.",
      },
      {
        title: "Restart and Stream",
        description: "Reboot the IBO Player app on your TV to view all loaded USA channels, sports bouquets, and VOD libraries.",
      },
    ],
  },
  {
    id: "apple-devices",
    device: "Apple TV, iPhone & iPad",
    recommendedApp: "IPTVX / GSE Smart IPTV / Smarters Player Lite",
    badge: "iOS & tvOS",
    difficulty: "Easy",
    timeMinutes: 3,
    steps: [
      {
        title: "Install Smarters Player Lite from App Store",
        description: "Open the iOS or Apple TV App Store and search for Smarters Player Lite (Official free version).",
      },
      {
        title: "Select Xtream Codes API",
        description: "Select Login with Xtream Codes API option upon launching the app.",
      },
      {
        title: "Enter your IPTV USA Account Info",
        description: "Input any name for the playlist, followed by the Username, Password, and Server Portal URL sent to your email or WhatsApp.",
      },
      {
        title: "Download & Stream",
        description: "Click Add User and let the app sync all live streams, movies, and TV series in high resolution.",
      },
    ],
  },
  {
    id: "windows-mac",
    device: "Windows PC & Mac",
    recommendedApp: "IPTV Smarters Pro / VLC Media Player",
    badge: "Desktop",
    difficulty: "Easy",
    timeMinutes: 2,
    steps: [
      {
        title: "Download IPTV Smarters for Desktop",
        description: "Download IPTV Smarters for Windows or Mac from the direct link in your activation email.",
      },
      {
        title: "Login with IPTV USA Xtream Codes",
        description: "Launch the installer, open the application, and enter your credentials.",
      },
      {
        title: "Watch in High Definition",
        description: "Browse categorized channels, watch live sports with multi screen mode, or stream 4K movies with VLC integration.",
      },
    ],
  },
];
