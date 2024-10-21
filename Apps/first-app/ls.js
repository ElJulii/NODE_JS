const fs = require('node:fs');

//the  '.' is when we want to know the files and folder that we want in the main folder of our project

fs.readdir('.', (err, files) => {
    if(err) {
        console.log('It was an error reading the next fils: ', err);
        return;
    }
    files.forEach(file => {
        console.log(file)
    })
})

//If we want to know the files from a specific folder, we need to add the name of the folder instead of '.'

fs.readdir('./native-modules', (err, files) => {
    if(err) {
        console.log('It was an error reading the next fils: ', err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    })
})