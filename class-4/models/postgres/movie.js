import { randomUUID } from 'node:crypto'
import { pool } from '../../database/config.js'

export class movieModel {
  static getAll = async ({ genre }) => {
    if (genre) {
      const restLetters = genre.slice(1).toLowerCase()
      const firstLetter = genre.charAt(0).toUpperCase()
      const newGenre = firstLetter + restLetters
      const query = `
        SELECT * FROM movie
        WHERE $1 = ANY(genre)
      `
      const { rows } = await pool.query(query, [newGenre])
      return rows
    }

    const { rows } = await pool.query('SELECT * FROM movie')
    return rows
  }

  static async getById ({ id }) {
    const query = `
      SELECT * FROM movie
      WHERE $1 = id
    `
    const { rows } = await pool.query(query, [id])
    return rows
  }

  static async create (input) {
    const data = {
      id: randomUUID(),
      title: input.input.title,
      year: input.input.year,
      director: input.input.director,
      duration: input.input.duration,
      poster: input.input.poster,
      genre: input.input.genre,
      rate: input.input.rate
    }
    const query = `
      INSERT INTO movie (id, title, year, director, duration, poster, genre, rate) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *
    `
    const values = [data.id, data.title, data.year, data.director, data.duration, data.poster, data.genre, data.rate]
    const { rows } = await pool.query(query, values)
    return rows[0]
  }

  static async delete ({ id }) {
    const movie = await this.getById({ id })
    if (movie.length > 0) {
      const query = `
      DELETE FROM movie 
      WHERE id = $1
    `
      await pool.query(query, [id])
      return true
    }
    return false
  }

  static async update ({ id, input }) {
    const allowedFields = ['title', 'year', 'director', 'duration', 'poster', 'genre', 'rate']
    const keys = Object.keys(input).filter(key => allowedFields.includes(key))
    const values = Object.values(input)

    const setValues = keys.map((key, i) => `${key} = $${i + 1}`).join(', ')

    const query = `
      UPDATE movie 
      SET ${setValues}
      WHERE id = $${keys.length + 1}
      RETURNING *
    `
    const { rows } = await pool.query(query, [...values, id])
    return rows[0]
  }
}
