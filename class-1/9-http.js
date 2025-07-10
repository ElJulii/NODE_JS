const http = require('node:http')
const { findAvailablePort } = require('./10-freePort.js')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('hello world')
})

findAvailablePort(desirePort).then(port => {
  server.listen(port, () => {
    console.log(`you can access to the port http://localhost:${port}`)
  })
})

// we use port 0 when we want to use an available port

// server.listen(0, () => {
//   console.log(`The server is listening at the port http://locahost:${server.address().port}`)
// })
