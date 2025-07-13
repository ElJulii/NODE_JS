import { z } from 'zod'

const movieSchemas = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required'
  }),
  year: z.number({

  }).int().min(1900).max(2025),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5.5),
  poster: z.string().url({
    message: 'Poster must be a valid url'
  }),
  genre: z.array(
    z.enum(['Action', 'Horror', 'Crime', 'Comedy', 'Sci-Fi', 'Drama', 'Fantasy', 'Thriller', 'Adventure']), {
      required_error: 'The genre is required',
      invalid_type_error: 'Movie genre must be an array of enum Genre'
    }
  )
})

export function validateMovie (object) {
  return movieSchemas.safeParse(object) // safeParse will bring you errors without using try catch
}

export function validatePartialMovie (input) {
  return movieSchemas.partial().safeParse(input) // We say that we want just some parts of the object and not all the data
}
