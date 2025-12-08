let http = require("http");
let serverFunction = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Worlde2e2e2e");
}
let server = http.createServer(serverFunction)
server.listen(3000);
