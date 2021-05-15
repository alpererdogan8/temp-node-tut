const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    return res.end("deneme");
  }
  return res.end(`<h1>Opps!</h1> <a href="/" >Back</a>`);
});

server.listen(5000);
