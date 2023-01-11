const http = require("http");

// create server takes callback
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  }
  if (req.url === "/about") {
    res.end("Here is about our History");
  }
  res.end("<h1>Opps Not Found</h1>");
});

server.listen(5000);
