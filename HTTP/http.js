const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hello world!')
});

// If you already know how to use a port, this is the one for you

// server.listen(3000, () => {
//     console.log('Server listening on port 3000')
// })

//If you want to use any port that is available, use port 0, It will select a port that is not been used
server.listen(0, () => {
    console.log(`Server listening in port http://localhost:${server.address().port}`)
})