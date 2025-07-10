const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8') // the type of content of the header

  if (req.url === '/') {
    res.statusCode = 200 // status code
    res.end('Welcome to the main page!') // Response in the body page
  } else if (req.url === '/contact') {
    res.statusCode = 200
    res.end('<h1>This is Contacts page!</h1>')
  } else {
    res.statusCode = 404
    res.end(`<p>We have a status code of ${res.statusCode}</p>`)
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`The server is running at http://localhost:${desiredPort}`)
})
