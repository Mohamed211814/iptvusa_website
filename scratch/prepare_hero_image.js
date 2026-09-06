const fs = require('fs');
const sharp = require('sharp');

async function processImage() {
  const badgeSvg = Buffer.from(`
    <svg width="160" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="160" height="32" rx="6" fill="#0f192b" stroke="rgba(0, 85, 255, 0.4)" stroke-width="1"/>
      <circle cx="16" cy="16" r="4" fill="#10b981"/>
      <text x="30" y="20" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">IPTV USA PRO</text>
    </svg>
  `);

  const inputPath = 'C:/Users/Simo/.gemini/antigravity-ide/brain/54a5b7f9-ed62-4c4e-a6bb-636d84d7e083/iptv_player_live_1788714588859.jpg';
  
  // 1. Cropped TV screen with custom IPTV USA PRO badge
  await sharp(inputPath)
    .extract({ left: 247, top: 92, width: 882, height: 526 })
    .composite([
      {
        input: badgeSvg,
        left: 88,
        top: 34
      }
    ])
    .webp({ quality: 92 })
    .toFile('c:/Users/Simo/Desktop/iptvusa/public/images/iptv_player_screen.webp');

  console.log('Successfully saved public/images/iptv_player_screen.webp');
}

processImage().catch(console.error);
