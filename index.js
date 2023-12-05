const express = require('express');
//console.log(express);
const app = express();

app.get('/', function(req, res){
    res.send('Greetings');
})
app.listen(3000);