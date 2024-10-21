import { readFile } from "node:fs/promises";

Promise.all([
    readFile('./native-modules/file.txt', 'utf-8'),
    readFile('./native-modules/file_2.txt', 'utf-8')
]).then(([text_one, text_two]) => {
    console.log(text_one);
    console.log(text_two);
})
