

const fs = require('fs');
const dataInfo = 'Some Data Information';

fs.writeFile('./first.txt', dataInfo, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('File was written');
    }
}); 

fs.appendFile('./first.txt', '\n One more line', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Appended file');
    }
});