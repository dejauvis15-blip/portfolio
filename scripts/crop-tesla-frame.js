// Crops individual mockup shots out of the single tall Figma frame export
// (Frame 42.png) for the Tesla case study.
const sharp = require("sharp");
const path = require("path");

const SRC = "C:\\Users\\Jauvi\\Downloads\\Frame 42.png";
const OUT_DIR = path.join(__dirname, "..", "public", "images", "tesla");

const crops = [
  { name: "final-laptop.png", left: 20, top: 4270, width: 1250, height: 750 },
  { name: "final-tablet.png", left: 20, top: 7310, width: 1500, height: 770 },
  { name: "final-desktop.png", left: 1610, top: 8520, width: 1850, height: 1010 },
];
// Note: hero-band.jpg, full-homepage.jpg, and cybertruck-band.jpg were NOT
// cropped from this file — they were pulled at full resolution straight
// from the Tesla-Prototype Figma file via the Figma MCP's get_screenshot
// (nodes 36:26 for the full page, 36:27 for the hero band, 36:37 for the
// Cybertruck section), which is a much crisper source than this flattened
// presentation export.

(async () => {
  const meta = await sharp(SRC).metadata();
  console.log("Source size:", meta.width, "x", meta.height);
  for (const c of crops) {
    await sharp(SRC)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .toFile(path.join(OUT_DIR, c.name));
    console.log("Wrote", c.name);
  }
})();
