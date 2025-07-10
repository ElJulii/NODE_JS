const http = require('node:http')
const dittoJSON = require('./pokeditto.json')

const port = process.argv.PORT ?? 1234

const processRequest = (request, response) => {
  const { method, url } = request

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          response.setHeader('Content-Type', 'text/html; charset=utf-8')
          return response.end('<h1>This is my page</h1>')
        case '/pokemon/ditto':
          response.setHeader('Content-Type', 'application/json; charset=utf-8')
          return response.end(JSON.stringify(dittoJSON))
        default:
          response.setHeader('Content-Type', 'text/html; charset=utf-8')
          response.caseStatus = 404
          return response.end('<h1>Page was not found</h1>')
      }
      
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
            // Listen the event DATA
          request.on('data', chunk => {
            body += chunk.toString()
          })

          request.on('end', () => {
            const data = JSON.parse(body)
            // we could insert in data base
            // ------
            //in body
            response.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            response.end(JSON.stringify(data))
          })
          break
        }  
       
        default:
          response.statusCode = 404
          response.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return response.end('404 Not Found')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`The server is running on the server: http://localhost:${port}`)
})
