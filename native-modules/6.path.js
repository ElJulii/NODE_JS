// slash to separate folders based on the operating system
const path = require('node:path');
console.log("With this line we separate folders: ", path.sep)

//join paths

const newPath = path.join('folder_one', 'folder_two', 'text.txt');
console.log('We join folder with a file with: ', newPath);

//We use 'base' to know which file we have in a route
const base = path.basename('/older_one/older_two/password.txt');
console.log('the file in the path is: ', base);

// we just want the name of file, and we do not need the extension. We add '.txt'
const fileName = path.basename('/older_one/older_two/password.txt', '.txt');
console.log('the file name is: ', fileName);

//How to know the extension of a folder
const extension = path.extname('my.file.type.txt');
console.log('This real extension of this file: ', extension)