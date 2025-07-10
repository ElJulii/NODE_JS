const os = require('node:os')

console.log('Everything about the operative system:')
console.log('---------------------------')

console.log('Name of the operative system: ', os.platform())
console.log('Operative system version: ', os.release())
console.log('Operative system architecture: ', os.arch())
console.log('CPUs: ', os.cpus()) // <--- To scale process in node
console.log('Free memory: ', os.freemem() / 1024 / 1024)
console.log('Total memory: ', os.totalmem() / 1024 / 1024)
console.log('Host name: ', os.hostname())
