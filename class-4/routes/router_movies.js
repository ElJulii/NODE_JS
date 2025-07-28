import { Router } from 'express'
import { MovieController } from '../controllers/movieController.js'

export const createMovieRouter = ({ movieModel }) => {
  const moviesRouter = Router()

  const movieController = new MovieController({ movieModel })

  moviesRouter.get('/', movieController.getAll)

  moviesRouter.get('/:id', movieController.getById)

  moviesRouter.post('/', movieController.create)

  moviesRouter.delete('/:id', movieController.deleteId)

  moviesRouter.patch('/:id', movieController.updateId)

  return moviesRouter
}
