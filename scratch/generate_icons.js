const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'src', 'app');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 512x512 Master SVG Vector
const svgMaster = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0055ff" />
      <stop offset="50%" stop-color="#1282ff" />
      <stop offset="100%" stop-color="#1ce783" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Rounded App Icon Background -->
  <rect x="16" y="16" width="480" height="480" rx="105" fill="url(#brandGradient)" />

  <!-- TV Antenna -->
  <polyline points="336 95 256 185 176 95" 
    fill="none" 
    stroke="#050811" 
    stroke-width="34" 
    stroke-linecap="round" 
    stroke-linejoin="round" />

  <!-- TV Screen Outer Frame -->
  <rect x="76" y="185" width="360" height="240" rx="42" 
    fill="none" 
    stroke="#050811" 
    stroke-width="34" 
    stroke-linecap="round" 
    stroke-linejoin="round" />

  <!-- TV Screen Inner Glow / Display -->
  <rect x="106" y="215" width="300" height="180" rx="24" 
    fill="#050811" 
    opacity="0.12" />

  <!-- Play Triangle in Center of Screen -->
  <polygon points="232 265 232 345 304 305" 
    fill="#050811" />
</svg>`;

// Write master SVG to public/icon.svg and src/app/icon.svg
fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgMaster);
fs.writeFileSync(path.join(publicDir, 'logo.svg'), svgMaster);
fs.writeFileSync(path.join(appDir, 'icon.svg'), svgMaster);

async function generateAllIcons() {
  const svgBuffer = Buffer.from(svgMaster);

  // 1. icon-512.png (PWA & Google high-res logo)
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));

  // 2. icon-192.png (Android / Chrome)
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));

  // 3. apple-touch-icon.png (180x180 iOS Safari)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));

  // 4. favicon-48x48.png (Google Search official favicon size)
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'));

  // 5. favicon-32x32.png (Standard desktop tab)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  // 6. favicon-16x16.png (Classic small tab)
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // 7. mstile-150x150.png (Windows taskbar / start tile)
  await sharp(svgBuffer)
    .resize(150, 150)
    .png()
    .toFile(path.join(publicDir, 'mstile-150x150.png'));

  // 8. Generate multi-size favicon.ico using 16, 32, 48 PNGs
  const b16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const b32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const b48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: b16 },
    { width: 32, height: 32, buffer: b32 },
    { width: 48, height: 48, buffer: b48 },
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

  console.log('Successfully generated all icons for Google, Windows, Apple, and Android devices!');
}

// Minimal ICO header & directory builder for PNG-encoded icons
function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + (count * dirEntrySize);

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  const buffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    entries.push(entry);
    buffers.push(img.buffer);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...buffers]);
}

generateAllIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
