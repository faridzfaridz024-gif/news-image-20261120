// news-image-20261120: copy the poster (entry.png) into the harness output dir.
// Pure copy program: no network, deterministic, byte-identical across runs.
import { copyFileSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
const src = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");
// Sanity: the source must be a whole PNG (magic bytes 89 50 4E 47 0D 0A 1A 0A).
const head = readFileSync(src).subarray(0, 8);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(PNG_MAGIC)) throw new Error("entry.png is not a PNG");
// Hash the source so the copy can be proven byte-identical, not just
// the same size: a truncated or altered copy with the right size would
// otherwise pass.
const srcHash = createHash("sha256").update(readFileSync(src)).digest("hex");
copyFileSync(src, dest);
const size = statSync(dest).size;
if (size > 1048576) throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
if (size !== statSync(src).size) throw new Error("copy size mismatch");
// The copy must itself be a whole PNG, not just the same size.
const outHead = readFileSync(dest).subarray(0, 8);
if (!outHead.equals(PNG_MAGIC)) throw new Error("copied entry.png is not a PNG");
const destHash = createHash("sha256").update(readFileSync(dest)).digest("hex");
if (destHash !== srcHash) throw new Error("copy hash mismatch: output is not byte-identical to entry.png");
