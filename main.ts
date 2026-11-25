// One Emoji, One Smile — entry for u-0xkianno-one-emoji-one-smile-5470751f
//
// Writes exactly one emoji to /output/entry.txt: the hugging face.
// Chosen because a stranger reads it at first glance as an open-arms
// welcome — warmth aimed directly at them, instantly readable in any
// age or background, and clearly picked for the moment rather than the
// default smiley, without intimacy, sarcasm or flirtation.

import { mkdirSync, writeFileSync } from "node:fs";

// Deterministic: no network, no randomness, no dependencies — the same
// single emoji is written on every run, with no trailing newline, so the
// file holds exactly the 4 UTF-8 bytes of U+1F917.
const EMOJI = "\u{1F917}"; // 🤗 hugging face
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");
