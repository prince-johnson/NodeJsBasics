const fs = require("fs");

// blocking and non blocking

const { readFileSync, writeFileSync } = fs;
const first = readFileSync("NodeBasics\built-in-modules\fs.js", "utf-8");
console.log(first);

// writeFileSync("first.txt", "how are ou");
