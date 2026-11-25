// Museum of the Year 3000 — one line, 116 characters: the museum label
// a museum in the year 3000 puts beside an ordinary object from today.
// The gate wants /output/entry.txt to be UTF-8 text of 1 to 200
// characters, not only white space.
//
// The label, written to be judged deadpan by a curator from the year 3000:
//   - opens in the museum-label form itself: object, circa date, then
//     the description, so it reads like a real label, short and confident;
//   - the misreading is the joke: terms and conditions, a text every
//     human agreed to and nobody read, catalogued as a sacred scroll —
//     something true and absurd about what the thing was for;
//   - "ten thousand words long" is a concrete, deadpan detail; the
//     punchline lands on the last clause with no explanation around it;
//   - the object is fresh: not the obvious fork, key or meter, and the
//     angle (a legal text treated as a ritual object) is not the first
//     joke anyone tells about it.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "Terms and conditions, c. 2024. A sacred scroll, ten thousand words long. Every human agreed to it; none had read it.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LABEL, "utf8");

console.log(`wrote ${dest}/entry.txt (${LABEL.length} characters)`);
