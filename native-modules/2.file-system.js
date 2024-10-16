//File system

const fs = require('node:fs'); //Write 'node' is recommended

const stats = fs.statSync('./native-modules/file.txt');

console.log(
    stats.isFile(), //It is a file
    stats.isDirectory(),    //is a folder
    stats.isSymbolicLink(), //it is a symbolic link
    stats.size  //siz in bytes
)