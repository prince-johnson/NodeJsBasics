const fs = require("fs");

// blocking and non blocking

// const { readFileSync, writeFileSync } = fs;
// const first = readFileSync("NodeBasics\built-in-modules\fs.js", "utf-8");
// console.log(first);

// writeFileSync("first.txt", "how are ou");

const { readFile, writeFile } = fs;

readFile("first.txt", "utf-8", (err, res)=>{
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    writeFile("second.txt", first, (err, res)=>{
        if (err) {
            console.log(err);
        }
        readFile("second.txt", "utf-8", (err, res)=>{
            if(err) {
                console.log(err);
            }
            console.log(res);
        })
    });
});
