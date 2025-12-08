let http = require("http");
let serverFunction = (req, res) => {
    try{
        console.log(req);
        console.log("Request received:" + req.url);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Hello Worlde2e2e2e");
    }
    catch(error){
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Error: " + error);
    }
}
let server = http.createServer(serverFunction)
server.listen(3000);
