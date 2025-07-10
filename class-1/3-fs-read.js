const fs = require('node:fs');

const text = fs.readFileSync('./class-1/file.txt', 'utf-8');
fs.readFile('./class-1/file-two.txt', 'utf-8', (err, text) => {
    console.log(text);
});

console.log(text)