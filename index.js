

const http = require('http');
const PORT = 5000;
const {getHTML, getText, getComments, handleNotFound, postComment} = require('./handlers');


const server = http.createServer((req, res) => {
    if(req.method = 'GET' && req.url === '/http'){
       return getHTML(req, res);
    }

    if(req.method = 'GET' && req.url === '/text'){
        return getText(req, res);
    }

    if(req.method = 'GET' && req.url === '/comments'){
        return getComments(req, res);
    }

    if(req.method = 'POST' && req.url === '/comments'){
        return postComment(req, res);
    }

    handleNotFound(req, res);
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});



