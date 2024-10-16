import { readFile } from 'node:fs/promises';

console.log('Reading the first field: ')

const text_one = await readFile('./native-modules/file.txt', 'utf-8');
console.log('First text: ', text_one);

console.log('Doing something meanwhile the first file is being read');
console.log('REading the second file');

const text_two = await readFile('./native-modules/file_2.txt', 'utf-8');
console.log('This is the seconde text: ', text_two);

console.log('The files were read. Let us see what is inside of them: ')