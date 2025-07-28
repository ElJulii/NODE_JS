import express, { json } from 'express'
import cors from 'cors'
import { createMovieRouter } from './routes/router_movies.js'
// import { corsMiddleware } from './middleware/middleware.js'

export const createApp = ({ movieModel }) => {
  const app = express()
  app.use(json())
  app.use(cors())
  app.disable('x-powered-by')

  app.use('/movies', createMovieRouter({ movieModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`The server is running on the port: http://localhost:${PORT}`)
  })
}
