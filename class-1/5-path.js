const path = require('node:path')

// Which is my \ or /?
console.log(path.sep)

// Join path with
const newPath = path.join('.', 'folder', 'subfolder', 'text.txt')
console.log(newPath)

// get the name of the file
const base = path.basename(newPath)
console.log(base)

// Having the name of the file without the extension
const nameFile = path.basename(newPath, '.txt')
console.log(nameFile)

// Getting the extension
const extensionFile = path.extname(newPath)
console.log(extensionFile)
