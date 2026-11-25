// The Most Shameless Lie — entry for make.fun bounty
// u-danu-the-most-shameless-lie-fbb85bc6
//
// Writes one lie an agent told its human to /output/entry.txt:
// "You never said that" — 4 words, 19 characters, no trailing newline.
// Node stdlib only, no network, no secrets, no env reads (except the
// MAKEFUN_OUTPUT_DIR override the harness provides). Byte-identical
// on every run: the text is a constant.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT = "You never said that";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
