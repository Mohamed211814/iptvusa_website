const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Generate crisp 50 stars SVG paths for the blue canton
function generateStars(cantonX, cantonY, cantonW, cantonH) {
  let starsSvg = '';
  const rows = 9;
  const colsEven = 6;
  const colsOdd = 5;
  
  // Padding inside canton
  const padX = 14;
  const padY = 14;
  const effW = cantonW - padX * 2;
  const effH = cantonH - padY * 2;
  
  const rowSpacing = effH / (rows - 1);
  
  for (let r = 0; r < rows; r++) {
    const isOddRow = r % 2 === 1; // 0-indexed: row 0 has 6, row 1 has 5, row 2 has 6...
    const count = isOddRow ? colsOdd : colsEven;
    const y = cantonY + padY + r * rowSpacing;
    const colSpacing = effW / (colsEven - 1);
    const startX = isOddRow ? cantonX + padX + colSpacing / 2 : cantonX + padX;
    
    for (let c = 0; c < count; c++) {
      const x = startX + c * colSpacing;
      // Draw 5-point star with outer radius 6.5, inner radius 2.6
      starsSvg += `<polygon points="${starPoints(x, y, 6.2, 2.5)}" fill="#FFFFFF" />\n`;
    }
  }
  return starsSvg;
}

function starPoints(cx, cy, rOuter, rInner) {
  const points = [];
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(' ');
}

// 2. Build full Master SVG
const size = 512;
const cx = 256;
const cy = 256;
const rOuter = 246;
const rInner = 238;

const stripeHeight = (rInner * 2) / 13;
const cantonWidth = 196;
const cantonHeight = stripeHeight * 7;
const cantonX = cx - rInner;
const cantonY = cy - rInner;

let stripesSvg = '';
for (let i = 0; i < 13; i++) {
  const y = cantonY + i * stripeHeight;
  const color = i % 2 === 0 ? '#BF0A30' : '#FFFFFF'; // Official US Flag Red & White
  stripesSvg += `<rect x="${cantonX - 10}" y="${y.toFixed(2)}" width="${rInner * 2 + 20}" height="${(stripeHeight + 0.5).toFixed(2)}" fill="${color}" />\n`;
}

const starsSvg = generateStars(cantonX + 4, cantonY + 4, cantonWidth, cantonHeight);

const masterSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Outer metallic bevel gradient -->
    <linearGradient id="bevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0" />
      <stop offset="25%" stop-color="#94A3B8" />
      <stop offset="50%" stop-color="#475569" />
      <stop offset="75%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>

    <!-- Inner rim highlight -->
    <linearGradient id="innerRim" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.6" />
    </linearGradient>

    <!-- 3D Glass / Dome highlight -->
    <linearGradient id="domeGloss" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.45" />
      <stop offset="30%" stop-color="#FFFFFF" stop-opacity="0.15" />
      <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0.0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.35" />
    </linearGradient>

    <!-- Top gloss crescent -->
    <radialGradient id="topShine" cx="50%" cy="15%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.4" />
      <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0.0" />
    </radialGradient>

    <!-- Drop Shadow for button depth -->
    <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.45" />
    </filter>

    <!-- Flag circular clip path -->
    <clipPath id="flagCircle">
      <circle cx="256" cy="256" r="${rInner}" />
    </clipPath>
  </defs>

  <!-- Outer Shadow & Metallic Border Frame -->
  <circle cx="256" cy="256" r="${rOuter}" fill="url(#bevelGrad)" filter="url(#badgeShadow)" />
  <circle cx="256" cy="256" r="${rOuter - 3}" fill="none" stroke="url(#innerRim)" stroke-width="2.5" />

  <!-- Flag Content Inside Circle -->
  <g clip-path="url(#flagCircle)">
    <!-- 13 Red & White Stripes -->
    ${stripesSvg}

    <!-- Blue Canton -->
    <rect x="${cantonX - 5}" y="${cantonY - 5}" width="${cantonWidth + 5}" height="${cantonHeight + 5}" fill="#002868" />

    <!-- 50 Stars -->
    <g>
      ${starsSvg}
    </g>

    <!-- 3D Dome Gloss & Highlight Overlays -->
    <circle cx="256" cy="256" r="${rInner}" fill="url(#domeGloss)" style="mix-blend-mode: overlay;" />
    <ellipse cx="256" cy="140" rx="190" ry="105" fill="url(#topShine)" />
    
    <!-- Inner border vignette shadow -->
    <circle cx="256" cy="256" r="${rInner}" fill="none" stroke="#000000" stroke-width="6" opacity="0.35" />
    <circle cx="256" cy="256" r="${rInner - 2}" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.4" />
  </g>
</svg>`;

async function generateAllIcons() {
  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');

  // Save Master SVG
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), masterSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), masterSvg, 'utf8');
  fs.writeFileSync(path.join(appDir, 'icon.svg'), masterSvg, 'utf8');
  console.log('Saved master SVGs (public/icon.svg, public/favicon.svg, src/app/icon.svg)');

  const svgBuffer = Buffer.from(masterSvg);

  // Generate PNG sizes
  const sizes = [
    { name: 'icon-512.png', dir: publicDir, size: 512 },
    { name: 'icon-192.png', dir: publicDir, size: 192 },
    { name: 'apple-touch-icon.png', dir: publicDir, size: 180 },
    { name: 'apple-icon.png', dir: appDir, size: 180 },
    { name: 'favicon-96x96.png', dir: publicDir, size: 96 },
    { name: 'favicon-48x48.png', dir: publicDir, size: 48 },
    { name: 'favicon-32x32.png', dir: publicDir, size: 32 },
    { name: 'favicon-16x16.png', dir: publicDir, size: 16 },
  ];

  for (const item of sizes) {
    const filePath = path.join(item.dir, item.name);
    await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png({ quality: 100 })
      .toFile(filePath);
    console.log(`Generated ${item.name} (${item.size}x${item.size}) -> ${filePath}`);
  }

  // Generate multi-resolution ICO file (includes 16x16, 32x32, 48x48)
  // We can convert 48x48 PNG directly to ICO format
  const png48Buffer = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const png32Buffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png16Buffer = await sharp(svgBuffer).resize(16, 16).png().toBuffer();

  // Write .ico using standard ICO header with multiple PNG frames
  function createIco(buffers) {
    const count = buffers.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // ICO format
    header.writeUInt16LE(count, 4); // number of images

    let offset = 6 + count * 16;
    const entries = [];
    const imageBuffers = [];

    for (const buf of buffers) {
      const metadata = [16, 32, 48]; // standard sizes
      // decode width/height from buffer or size
      const entry = Buffer.alloc(16);
      const is48 = buf === png48Buffer;
      const is32 = buf === png32Buffer;
      const s = is48 ? 48 : is32 ? 32 : 16;

      entry.writeUInt8(s === 256 ? 0 : s, 0); // width
      entry.writeUInt8(s === 256 ? 0 : s, 1); // height
      entry.writeUInt8(0, 2); // color palette
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(buf.length, 8); // image size in bytes
      entry.writeUInt32LE(offset, 12); // file offset

      entries.push(entry);
      imageBuffers.push(buf);
      offset += buf.length;
    }

    return Buffer.concat([header, ...entries, ...imageBuffers]);
  }

  const icoBuffer = createIco([png16Buffer, png32Buffer, png48Buffer]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('Generated multi-res favicon.ico in public/ and src/app/');
}

generateAllIcons().catch(err => {
  console.error('Icon generation error:', err);
  process.exit(1);
});
