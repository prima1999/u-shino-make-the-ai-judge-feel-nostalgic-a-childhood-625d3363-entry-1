import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "On summer evenings my grandmother called us in from the dusty lane, and we ate rice still steaming from the pot, barefoot on the cool tiled floor, while cicadas sang louder than her old radio and jasmine drifted through the open window, and the whole world felt small and safe.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
