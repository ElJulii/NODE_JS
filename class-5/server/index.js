import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'node:http'

const PORT = process.env.PORT ?? '3000'
const app = express()
const server = createServer(app)
const io = new Server(server, {
  connectionStateRecovery: true
})

io.on('connection', (socket) => {
  console.log('a user has connected!')

  socket.on('disconnect', () => {
    console.log('an user has disconnected')
  })

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

app.get('/', (request, response) => {
  response.sendFile(process.cwd() + '/class-5/client/index.html')
})

server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`)
})
