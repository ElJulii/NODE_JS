const os = require('node:os');
console.log('Operative system information: ')
console.log('-------------------------')

console.log('Name of system: ', os.platform());
console.log('Version: ', os.release());
console.log('Architecture: ', os.arch());
console.log('CPUs: ', os.cpus());   //<------ Vamos a poder escalar nuestro proceso de node
console.log('Free memory: ', os.freemem() / 1024 / 1024);
console.log('Total memory: ', os.totalmem() / 1024 / 1024); 
console.log('Days up of computer: ', os.uptime() / 60 / 60);
