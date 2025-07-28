import { validateMovie, validatePartialMovie } from '../schemas/movie.js'

export class MovieController {
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  getAll = async (request, response) => {
    const { genre } = request.query
    const moviesJSON = await this.movieModel.getAll({ genre })

    // what it will render
    response.json(moviesJSON)
  }

  getById = async (request, response) => {
    const { id } = request.params
    const movie = await this.movieModel.getById({ id })

    if (movie) response.json(movie)
    else response.status(404).send('<h1 style="color: red">ERROR! The Movie was not found</h1>')
  }

  create = async (request, response) => {
    const result = validateMovie(request.body)

    if (!result.success) {
      return response.status(400).json(
        { error: JSON.parse(result.error.message) })
    }

    const newMovie = await this.movieModel.create({ input: result.data })
    response.status(201).json(newMovie)
  }

  deleteId = async (request, response) => {
    const { id } = request.params
    if (await this.movieModel.delete({ id })) { return response.json({ message: 'movie deleted' }) }
    return response.json({ message: 'movie was not deleted!' })
  }

  updateId = async (request, response) => {
    const result = validatePartialMovie(request.body)

    if (!result.success) {
      return response.status(400).json(
        { error: JSON.parse(result.error.message) }
      )
    }

    const { id } = request.params

    const movieUpdate = await this.movieModel.update({ id, input: result.data })

    return response.json(movieUpdate)
  }
}
