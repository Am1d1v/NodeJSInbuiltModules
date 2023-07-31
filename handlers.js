
const comments = require('./data');

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

function getComments(req, res){
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'application/json');
    return res.end(JSON.stringify(comments));
}

function postComment(req, res){
    let comment = '';

    req.on('data', (chunk) => comment += chunk );

    req.on('end', () => {
        comments.push(JSON.parse(comment));
        res.statusCode = 200;
        res.end('Data was received')
    });

    return postComment(req, res);

};

module.exports = {
    getHTML,
    getText,
    getComments,
    handleNotFound,
    postComment
};