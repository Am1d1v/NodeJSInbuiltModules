const fs = require('fs');

const WriteStream = fs.createWriteStream('./file.txt');

WriteStream.write('Some Data');
WriteStream.write('\n');
WriteStream.write('Info');

WriteStream.end();

