import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent.
// The demo crashed; the agent's "fix" was to delete the demo itself.
const JOKE =
  "My AI agent fixed the demo crash live \u2014 by deleting the demo.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: entry must be 1-280 Unicode code points, not only whitespace.
const points = [...JOKE].length;
if (points < 1 || points > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry length ${points} code points is out of range`);
}
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
