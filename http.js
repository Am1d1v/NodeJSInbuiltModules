

const http = require('http');
const PORT = 5000;

const comments = [
    {id: 100, text: "First Comment"},
    {id: 101, text: "Second Comment"},
    {id: 102, text: "Third Comment"}
];


const server = http.createServer((req, res) => {
    if(req.url === '/http'){
        console.log(req);
        res.statusCode = 200;
        res.setHeader = ('Content-Type', 'text/plain');
        res.write('<html><body><div>');
        res.write('Hello');
        res.write('</div></body></html>');
        return res.end('Greetings');
    }

    if(req.url === '/text'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plan');
        return res.end('Some text');
    }

    if(req.url === '/json'){
        res.statusCode = 200;
        res.setHeader = ('Content-Type', 'application/json');
        return res.end(JSON.stringify(comments));
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    return res.end('<H1> Page not found');
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});



