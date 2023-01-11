const { readFile, writeFile, write } = require("fs");

readFile("first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  writeFile("second.txt", first, (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  });
});
