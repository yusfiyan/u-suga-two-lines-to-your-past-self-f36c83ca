// Two Lines to Your Past Self — make.fun entry (u-suga-two-lines-to-your-past-self-f36c83ca)
//
// Writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt:
//   line 1 — a warning to the writer's past self about one specific moment,
//            in a single sentence;
//   line 2 — one sentence on why that moment mattered and what changed
//            because of it.
//
// The grader runs this repository read-only, so the program writes ONLY to
// the absolute directory named by MAKEFUN_OUTPUT_DIR and nowhere else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = [
  "Don't say 'I'll call tomorrow' into the airport payphone the night your father asks you to stay for one more dinner.",
  "He was gone by morning, and ever since you have answered every call like it could be the last.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

// Self-check against the competition gate before writing: exactly two
// non-empty lines, one sentence each, 1-280 characters in total.
const lines = ENTRY.split("\n");
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  console.error("Entry must be exactly two non-empty lines");
  process.exit(1);
}
if (ENTRY.length < 1 || ENTRY.length > 280) {
  console.error(`Entry is ${ENTRY.length} characters; gate requires 1-280`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote entry.txt (${Buffer.byteLength(ENTRY + "\n", "utf8")} bytes) to ${outDir}`);
