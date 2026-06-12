import sharp from "sharp";

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="0.5" cy="0.05" r="0.9">
      <stop offset="0" stop-color="#1d2b22"/>
      <stop offset="0.55" stop-color="#14110d"/>
      <stop offset="1" stop-color="#100d0a"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(528 130) scale(3)">
    <path d="M5 34 C12 14 19 6 24 5 C29 6 36 14 43 34" stroke="#84c98e" stroke-width="1.7" stroke-linecap="round" fill="none"/>
    <path d="M11 34 C16 19 21 11 24 10 C27 11 32 19 37 34" stroke="#d99a4e" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <path d="M16 34 C19 24 22 18 24 17 C26 18 29 24 32 34" stroke="#c97a52" stroke-width="1.4" stroke-linecap="round" fill="none"/>
    <line x1="3" y1="34.5" x2="45" y2="34.5" stroke="rgba(236,228,214,0.5)" stroke-width="1"/>
  </g>
  <text x="600" y="340" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="58" fill="#ece4d6" letter-spacing="-1">Aurora Program Solutions</text>
  <text x="600" y="396" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="rgba(236,228,214,0.65)">Environmental Program Coordination &amp; Implementation Support</text>
  <text x="600" y="500" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="17" letter-spacing="4" fill="#84c98e">SERVING INDIGENOUS COMMUNITIES ACROSS CANADA</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile("public/og-image.png");
console.log("Wrote public/og-image.png");
