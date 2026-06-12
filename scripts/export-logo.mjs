import sharp from "sharp";
import { mkdirSync } from "node:fs";

mkdirSync("brand", { recursive: true });

const mark = `<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="2000" viewBox="0 0 48 40" fill="none">
  <path d="M5 34 C12 14 19 6 24 5 C29 6 36 14 43 34" stroke="#84c98e" stroke-width="1.7" stroke-linecap="round"/>
  <path d="M11 34 C16 19 21 11 24 10 C27 11 32 19 37 34" stroke="#d99a4e" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M16 34 C19 24 22 18 24 17 C26 18 29 24 32 34" stroke="#c97a52" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="3" y1="34.5" x2="45" y2="34.5" stroke="#eae6da" stroke-opacity="0.6" stroke-width="1"/>
</svg>`;

const tile = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 48 48" fill="none">
  <rect width="48" height="48" rx="11" fill="#100d0a"/>
  <path d="M8 38 C15 16 22 8 24 7 C26 8 33 16 40 38" stroke="#84c98e" stroke-width="2.1" stroke-linecap="round"/>
  <path d="M13 38 C18 21 23 13 24 12 C25 13 30 21 35 38" stroke="#d99a4e" stroke-width="1.9" stroke-linecap="round"/>
  <path d="M17.5 38 C20.5 27 23 21 24 20 C25 21 27.5 27 30.5 38" stroke="#c97a52" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="7" y1="38.5" x2="41" y2="38.5" stroke="#eae6da" stroke-opacity="0.6" stroke-width="1.4"/>
</svg>`;

await sharp(Buffer.from(mark)).png().toFile("brand/aurora-logomark.png");
await sharp(Buffer.from(tile)).png().toFile("brand/aurora-app-icon.png");

console.log("Wrote brand/aurora-logomark.png and brand/aurora-app-icon.png");
