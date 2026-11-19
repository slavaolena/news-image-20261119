// news-image-20261119 entry — Arno build
// Sums up Thursday 19 November 2026 world news.
// Copies the generated entry.png to the output dir.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(src, out);
