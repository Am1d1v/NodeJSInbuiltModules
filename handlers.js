
const comments = require('./data');

function getComments(req, res){
    res.statusCode = 200;
    res.setHeader = ('content-ype', 'application/json');
    return res.end(JSON.stringify(comments));
}

function getHTML(req, res){
    console.log(req);
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    res.write('<html><body><div>');
    res.write('Hello');
    res.write('</div></body></html>');
    return res.end('Greetings');
}

function getText(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Some text');
}

function handleNotFound(req, res){
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    return res.end('<H1> Page not found');
}

module.exports = {
    getHTML,
    getText,
    getComments,
    handleNotFound
};