const http = require('http');
const server = new http.Server();

server.on('request', (req, res) => {	
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write( req.method + " | " + req.url );
    console.log("#############################")
    console.log("#############################")
    console.log(req.method + " | " + req.url)
    console.dir( req.headers )
    let body = ''
    req.on('data', (data) => body += data)
    req.on('end', () => console.dir(body))	
	res.end();
});

server.listen(4000);