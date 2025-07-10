const express = require('express')
const dittoJSON = require('./pokeditto.json')

const app = express()
app.disable('x-powered-by') // We deactivate it because can give some security problems

const PORT  = process.env.PORT ?? 1234
//This is a middleware for express
app.use(express.json())

// This one below is the same one upon but the upon one is very si simplified

// This is a middleware
// app.use((request, response, next) => {
//     if (request.method !== 'POST') return next()
//     if (request.headers['content-type'] !== 'application/json') return next()

//     // Just POST methods arrive to the middleware and the ones, that have Content-Type: application/json

//     let body = ''
//     // Listen the event DATA
//     request.on('data', chunk => {
//         body += chunk.toString()
//     })

//     request.on('end', () => {
//         const data = JSON.parse(body)
//         // Now we mute the request
//         request.body = data
//         next()
//     })
// })

app.get('/', (request, response) => {
    response.send('<h1>My web page</h1>') // It detects if it html or plain text
    // response.json({message : "number one"}) // it detects and does JSON.parse and JSON.stringify as well
})

app.get('/pokemon/ditto', (request, response) => {
    response.json(dittoJSON)
})

app.post('/pokemon', (request, response) => {
    // With request.body could store in the database
    response.status(201).json(request.body)
})

// This is to avoid to
app.use((request, response) => {
    response.status(404).send('<h1 style="color: red; font-family: Georgia"> Bro?? We do not have that page 404</h1>')
})

app.listen(PORT, () => {
    console.log(`The server is running on the port: http://localhost:${PORT}`)
})