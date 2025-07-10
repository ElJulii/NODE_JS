const fs = require('node:fs/promises');
const fsS = require('node:fs');

const text_one = fsS.readFileSync('./class-1/file.txt', 'utf-8');

fs.readFile('./class-1/file-two.txt', 'tf-8')
.then(text => {
    console.log(text)
})
.catch(err => {
    console.log('Something has happened! We can not red the file!: ', err)
});

console.log('This is being executed first....')
console.log('Text number one: ', text_one)

//We can use the method promisify!

const {promisify} = require('util');
const fs2 = require('node:fs/promises');

const readFilePromises = promisify(fs2.readFile);

fs2.readFilePromises('./class-1/file-two.js', 'utf-8')
.then() //...