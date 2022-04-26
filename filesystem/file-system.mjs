import fs from "fs/promises";

const buffer = await fs.readFile("filesystem/file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("tempt.txt", "Hello World");