import { movieModel } from '../models/postgres/movie.js'
// import { movieModel } from '../models/local-file-system/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movie.js'

export class MovieController {
  static async getAll (request, response) {
    const { genre } = request.query
    const moviesJSON = await movieModel.getAll({ genre })

    // what it will render
    response.json(moviesJSON)
  }

  static async getById (request, response) {
    const { id } = request.params
    const movie = await movieModel.getById({ id })

    if (movie) response.json(movie)
    else response.status(404).send('<h1 style="color: red">ERROR! The Movie was not found</h1>')
  }

  static async create (request, response) {
    const result = validateMovie(request.body)

    if (!result.success) {
      return response.status(400).json(
        { error: JSON.parse(result.error.message) })
    }

    const newMovie = await movieModel.create({ input: result.data })
    response.status(201).json(newMovie)
  }

  static async deleteId (request, response) {
    const { id } = request.params
    if (await movieModel.delete({ id })) { return response.json({ message: 'movie deleted' }) }
    return response.json({ message: 'movie was not deleted!' })
  }

  static async updateId (request, response) {
    const result = validatePartialMovie(request.body)

    if (!result.success) {
      return response.status(400).json(
        { error: JSON.parse(result.error.message) }
      )
    }

    const { id } = request.params

    const movieUpdate = await movieModel.update({ id, input: result.data })

    return response.json(movieUpdate)
  }
}
