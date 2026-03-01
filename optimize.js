import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CANDIDATE_DIRS = [
  path.join(__dirname, 'content'),
  path.join(__dirname, 'public', 'content'),
];

const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1600;

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

function isImageFile(filePath) {
  return IMAGE_EXTENSIONS.includes(path.extname(filePath));
}

async function optimizeImage(inputPath, contentDir) {
  const ext = path.extname(inputPath);
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, ext);
  const outputPath = path.join(dir, `${base}.webp`);

  if (await fileExists(outputPath)) {
    console.log(`Skipping (already optimized): ${path.relative(contentDir, outputPath)}`);
    return;
  }

  const rel = path.relative(contentDir, inputPath);

  const isLogo = /logo/i.test(base);
  const width = isLogo ? 512 : MAX_WIDTH;
  const height = isLogo ? 512 : MAX_HEIGHT;
  const quality = isLogo ? 75 : 82;

  console.log(`Optimizing ${rel} -> ${path.relative(contentDir, outputPath)}`);

  await sharp(inputPath)
    .resize({
      width,
      height,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality })
    .toFile(outputPath);
}

async function main() {
  let contentDir = null;

  for (const dir of CANDIDATE_DIRS) {
    if (await fileExists(dir)) {
      contentDir = dir;
      break;
    }
  }

  if (!contentDir) {
    console.error('No content directory found. Checked:');
    for (const dir of CANDIDATE_DIRS) {
      console.error(`  - ${dir}`);
    }
    console.error('Create a "content" folder at the project root or in "public/content", then re-run:');
    console.error('  node optimize.js');
    process.exit(1);
  }

  console.log(`Using content directory: ${contentDir}`);

  let count = 0;

  for await (const filePath of walk(contentDir)) {
    if (isImageFile(filePath)) {
      try {
        await optimizeImage(filePath, contentDir);
        count += 1;
      } catch (err) {
        console.error(`Failed to optimize ${filePath}:`, err.message || err);
      }
    }
  }

  console.log(`\nDone. Processed ${count} image(s). WebP files are saved next to the originals.`);
}

main().catch((err) => {
  console.error('Unexpected error in optimize.js:', err);
  process.exit(1);
});

