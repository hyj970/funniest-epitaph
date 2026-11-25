// Famous Last Words: The Funniest Epitaph — one-line tombstone epitaph.
// Writes the entry to /output/entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I said 'watch this' — and, for once, everyone did.";

function formatEntry(text: string): string {
  return text.trim() + "\n";
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", formatEntry(ENTRY), "utf8");
console.log(ENTRY);
