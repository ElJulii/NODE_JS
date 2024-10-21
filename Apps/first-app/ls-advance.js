const fs = require('node:fs/promises');

const folder = process.argv[2] ?? '.'; //Two because is an empty place


fs.readdir(folder).then(
    files => {
        files.forEach(file => {
            console.log(file);
        });
    }
).catch(
    err => {
        if (err) {
            console.log('This was an error reading the files: ', err);
        }
    }
)
