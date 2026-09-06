const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

fs.copyFileSync('public/icon-512.png', 'public/logo.png');

const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07090f" />
      <stop offset="50%" stop-color="#0c1322" />
      <stop offset="100%" stop-color="#05070d" />
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0055ff" />
      <stop offset="100%" stop-color="#1ce783" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <circle cx="1000" cy="150" r="300" fill="#0055ff" opacity="0.12" />
  <circle cx="200" cy="500" r="250" fill="#1ce783" opacity="0.08" />

  <!-- Logo Icon -->
  <g transform="translate(120, 195)">
    <rect width="240" height="240" rx="50" fill="url(#brandGrad)" />
    <polyline points="158 45 120 85 82 45" fill="none" stroke="#050811" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="36" y="85" width="168" height="112" rx="20" fill="none" stroke="#050811" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <polygon points="108 122 108 160 144 141" fill="#050811" />
  </g>

  <!-- Typography -->
  <text x="400" y="270" font-family="Arial, sans-serif" font-weight="900" font-size="68" fill="#ffffff">IPTV <tspan fill="#2979ff">USA</tspan> <tspan fill="#1ce783" font-size="42">PRO</tspan></text>
  <text x="400" y="330" font-family="Arial, sans-serif" font-weight="700" font-size="28" fill="#a0aec0" letter-spacing="2">THE OFFICIAL IPTV SUBSCRIPTION</text>
  <text x="400" y="390" font-family="Arial, sans-serif" font-size="22" fill="#718096">24,000+ Live Channels | 110,000+ VODs | 4K UHD Anti Freeze 9.3</text>
</svg>`;

sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile('public/og-image.png')
  .then(() => {
    console.log('Successfully created public/logo.png and public/og-image.png');
  })
  .catch((err) => {
    console.error('Error generating og-image:', err);
  });
