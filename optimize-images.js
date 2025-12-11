// optimize-images.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

// CHANGE THIS TO YOUR REAL FOLDER
const inputDir = "./public";  
const outputDir = "./public/optimized";

// Which file types to optimize
const allowedExtensions = [".png", ".jpg", ".jpeg", ".webp"];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const sizes = [320, 640, 1280];

function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!allowedExtensions.includes(ext)) return;

  const fileName = path.basename(filePath, ext);

  console.log("Processing:", filePath);

  sizes.forEach(async (size) => {
    const outputFile = `${outputDir}/${fileName}-${size}.webp`;

    await sharp(filePath)
      .resize(size)
      .webp({ quality: 80 })
      .toFile(outputFile);

    console.log("✔ Created:", outputFile);
  });
}

function walkDir(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else {
      optimizeImage(fullPath);
    }
  });
}

walkDir(inputDir);
console.log("\n🎉 Optimization complete! Check folder: /public/optimized\n");
