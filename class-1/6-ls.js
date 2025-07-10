const fs = require('node:fs');
fs.readdir('./class-1', (err, files) => {
    if (err) {
        console.error('There is an error with the files: ', err);
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})

