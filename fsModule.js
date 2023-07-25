

const fs = require('fs');
const dataInfo = 'Some Data Information';

fs.writeFile('./first.txt', dataInfo, (err) => {
    if(err){
        console.log(err);
    }
}); 