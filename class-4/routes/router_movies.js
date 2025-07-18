import { Router } from 'express'
import { MovieController } from '../controllers/movieController.js'

export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)

moviesRouter.get('/:id', MovieController.getById)

moviesRouter.post('/', MovieController.create)

moviesRouter.delete('/:id', MovieController.deleteId)

moviesRouter.patch('/:id', MovieController.updateId)
