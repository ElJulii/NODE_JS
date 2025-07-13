import express, { json } from 'express'
import cors from 'cors'
import { moviesRouter } from './routes/router_movies.js'
// import { corsMiddleware } from './middleware/middleware.js'

const app = express()
app.use(json())
app.use(cors())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`The server is running on the port: http://localhost:${PORT}`)
})
