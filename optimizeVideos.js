import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CANDIDATE_DIRS = [
  path.join(__dirname, 'public', 'content'),
  path.join(__dirname, 'content'),
];

const VIDEO_EXTENSIONS = ['.mov', '.MOV'];

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

function isVideoFile(filePath) {
  return VIDEO_EXTENSIONS.includes(path.extname(filePath));
}

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const ff = spawn(ffmpegInstaller.path, args, { stdio: 'inherit' });
    ff.on('error', reject);
    ff.on('close', (code) => {
      if (code === 0) resolve(null);
      else reject(new Error(`ffmpeg exited with code ${code}`));
    });
  });
}

async function optimizeVideo(inputPath, contentDir) {
  const ext = path.extname(inputPath);
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, ext);
  const outputPath = path.join(dir, `${base}.mp4`);

  if (await fileExists(outputPath)) {
    console.log(`Skipping (already optimized): ${path.relative(contentDir, outputPath)}`);
    return;
  }

  const rel = path.relative(contentDir, inputPath);
  console.log(`Optimizing video ${rel} -> ${path.relative(contentDir, outputPath)}`);

  // Re-encode to H.264 MP4 at 1080p max height, reasonable quality
  const args = [
    '-y',
    '-i',
    inputPath,
    '-vf',
    'scale=-2:1080',
    '-c:v',
    'libx264',
    '-preset',
    'medium',
    '-crf',
    '24',
    '-c:a',
    'aac',
    '-b:a',
    '160k',
    outputPath,
  ];

  await runFfmpeg(args);
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
    console.error('Create a "public/content" or "content" folder with your videos, then re-run:');
    console.error('  node optimizeVideos.js');
    process.exit(1);
  }

  console.log(`Using content directory: ${contentDir}`);

  let count = 0;

  for await (const filePath of walk(contentDir)) {
    if (isVideoFile(filePath)) {
      try {
        await optimizeVideo(filePath, contentDir);
        count += 1;
      } catch (err) {
        console.error(`Failed to optimize ${filePath}:`, err.message || err);
      }
    }
  }

  console.log(`\nDone. Processed ${count} video(s). Optimized MP4 files are saved next to the originals.`);
}

main().catch((err) => {
  console.error('Unexpected error in optimizeVideos.js:', err);
  process.exit(1);
});

