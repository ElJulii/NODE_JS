import { pool } from '../database/config.js'
import { randomUUID } from 'node:crypto'
import bcrypt from 'bcrypt'

export class UserRepository {
  static async getAll () {
    const { rows } = await pool.query('SELECT * FROM users')
    return rows
  }

  static async getById ({ id }) {
    const query = `
      SELECT * FROM users
      WHERE id = $1
    `
    const { rows } = await pool.query(query, [id])
    return rows
  }

  static async create ({ username, password }) {
    // validate username
    Validation.username(username)
    Validation.password(password)

    // Be sure that the username does not exist
    const queryCheckUser = `
      SELECT * FROM users
      WHERE $1 = username
    `
    const checkerUser = await pool.query(queryCheckUser, [username])
    if (checkerUser.rows.length > 0) throw new Error('The user already exists!')
    const id = randomUUID()
    // HASH PASSWORD
    const hashedPassword = bcrypt.hashSync(password, 10)

    const queryCreateUser = `
      INSERT INTO users (id, username, password)
      VALUES ($1, $2, $3)
      RETURNING username
    `
    const { rows } = await pool.query(queryCreateUser, [id, username, hashedPassword])
    return rows[0]
  }

  static async login ({ username, password }) {
    Validation.username(username)
    Validation.password(password)

    const user = await this.findByUsername({ username })
    console.log(user)
    if (!user) throw new Error('The user does not exist')

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) throw new Error('password is wrong')

    const { password: _, ...publicUser } = user

    return publicUser
  }

  static async delete ({ id }) {
    let userDeleted = false
    const userExists = await this.getById({ id })

    if (userExists.length > 0) {
      const query = `
      DELETE FROM users
      WHERE id = $1
    `
      await pool.query(query, [id])
      userDeleted = true
    } else throw new Error('The users does not exist')

    return userDeleted
  }

  static async findByUsername ({ username }) {
    const query = `
      SELECT * FROM users
      WHERE username = $1
    `

    const { rows } = await pool.query(query, [username])
    return rows[0]
  }
}

class Validation {
  static username (username) {
    if (typeof username !== 'string') throw new Error('The username has to be an string')
    if (username.length < 3) throw new Error('The username has to be longer that 3 characters')
  }

  static password (password) {
    if (typeof password !== 'string') throw new Error('Password has to be an string')
    if (password.length < 6) throw new Error('The password has to be longer that 3 characters')
  }
}
