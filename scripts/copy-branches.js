import { cpSync, existsSync, rmSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const sourceDir = path.resolve(projectRoot, 'branches');
const targetDir = path.resolve(projectRoot, 'dist', 'branches');

if (!existsSync(sourceDir)) {
  console.warn('Skipping branch copy – no branches directory found.');
  process.exit(0);
}

// Ensure we always ship the latest static branch pages.
rmSync(targetDir, { recursive: true, force: true });
cpSync(sourceDir, targetDir, { recursive: true });

console.log('Copied branch pages to dist/branches');
