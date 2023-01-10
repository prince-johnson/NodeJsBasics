const http = require('http');
const url = require("url");
const path = require("path");
const fs = require("fs");

const mimeTypes = {
    "html": "text/html",
    "jpeg":"image/jpeg",
    "jpg":"image/jpg",
    "js":"text/javascript",
    "css":"text/css"
}

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let uri = url.parse(req.url).pathname; // /index.html or pages.html (the last html page)
  let fileName = path.join(process.cwd(),unescape(uri));
  console.log("process.cwd()", fileName);
  let status;
  try{
    status = fs.lstatSync(fileName);
  }catch(e){
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write('404 Not Found\n');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});