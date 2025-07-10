const fs = require('node:fs')

const stats = fs.statSync('class-1/file.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size // size of the file in bytes
)
