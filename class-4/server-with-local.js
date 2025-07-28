import { createApp } from './app'
import { MovieModel } from './models/local-file-system/movie.js'

createApp({ movieModel: MovieModel })
