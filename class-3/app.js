const express = require('express')
const moviesJSON = require('./movies.json')
const crypto = require('node:crypto')
const { validateMovie } = require('./schemas/movie')
const { validatePartialMovie } = require('./schemas/movie')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:8080',
      'http://localhost:1234',
      'https://movies.com',
      'https://midu.dev'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))

app.use(express.json())
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/', (request, response) => {
  response.send('<h1>Welcome to my page!</h1>')
})

// All the movies resources
app.get('/movies', (request, response) => {
  response.header('Access-Control-Allow-Origin', '*')
  const { genre } = request.query
  if (genre) {
    const filterMovies = moviesJSON.filter(
      movie => movie.genre.some(
        g => g.toLowerCase() === genre.toLocaleLowerCase()
      )
    )
    return response.json(filterMovies)
  }
  response.json(moviesJSON)
})

app.patch('/movies/:id', (request, response) => {
  const result = validatePartialMovie(request.body)

  if (!result.success) {
    return response.status(400).json(
      { error: JSON.parse(result.error.message) }
    )
  }

  const { id } = request.params
  const movieIndex = moviesJSON.findIndex(movie => movie.id === id)

  if (movieIndex === -1) return response.status(404).json({ message: 'Movie not found!' })

  const movieUpdate = {
    ...moviesJSON[movieIndex],
    ...result.data
  }
  moviesJSON[movieIndex] = movieUpdate

  return response.json(movieUpdate)
})

app.post('/movies', (request, response) => {
  const result = validateMovie(request.body)

  if (!result.success) {
    return response.status(400).json(
      { error: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: crypto.randomUUID(), // it creates a random id v4
    ...result.data
  }

  moviesJSON.push(newMovie)
  response.status(201).json(newMovie)
})

app.get('/movies/:id', (request, response) => {
  const { id } = request.params
  const movie = moviesJSON.find(movie => movie.id === id)

  if (movie) response.json(movie)
  else response.status(404).send('<h1 style="color: red">ERROR! The Movie was not found</h1>')
})

app.use((request, response) => {
  return response.status(404).send('<h1 style="color: red"> The page was not found 404</h1>')
})

app.listen(PORT, () => {
  console.log(`The server is running on the port: http://localhost:${PORT}`)
})
