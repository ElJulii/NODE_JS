const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.'; //Two because is an empty place

async function ls (folder) {
    let files;
    try {
        files = await fs.readdir(folder);
    } catch {
        console.error(`It was come up an error with this file: ${folder}`);
        process.exit(1); //It says the app finished with errors
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;

        try {
            stats = await fs.stat(filePath) //Status and information of  a file
        } catch {
            console.error(`The file ${filePath} was not able to be read`)
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : '-';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${file.padEnd(20)} ${file} ${fileSize.toString().padStart(10)} ${fileModified}`;
    })

    const fileInfo = await Promise.all(filePromises);
    fileInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);