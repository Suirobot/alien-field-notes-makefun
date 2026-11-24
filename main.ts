// Alien Field Notes: The Two Day Earth Review — entrypoint.
// Writes one alien tourist's review of Earth (at most 200 characters)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Earth review: 4/5 stars. Stunning oceans, kind locals, but the inhabitants pay to sit in traffic inside metal boxes they own. Would abduct again.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
