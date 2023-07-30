const http = require('http');
const PORT = 5000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Greetings');
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});