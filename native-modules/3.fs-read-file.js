const fs = require('node:fs');

//read file async

const text = fs.readFileSync('./native-modules/file.txt', 'utf-8');

console.log(text);

// just readfile with callbacks

console.log('Reading the first field: ')

fs.readFile('./native-modules/file.txt', 'utf-8', (err, text) => {
    console.log(text);
});

console.log('Doing something meanwhile the first file is being read');
console.log('REading the second file');

fs.readFile('./native-modules/file_2.txt', 'utf-8', (err, text) => {
    console.log(text);
})

console.log('The files were read. Let us see what is inside of them: ')

