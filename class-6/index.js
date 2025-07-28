import express from 'express'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import { PORT } from './config.js'
import { UserRepository } from './repositories/UserRepository.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.user(cookieParser())

app.get('/users', async (req, res) => {
  try {
    const users = await UserRepository.getAll()
    res.json(users)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

app.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await UserRepository.getById({ id })
    res.json(user)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    if (await UserRepository.delete({ id })) res.status(200).json({ message: 'User deleted' })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

app.get('/', (req, res) => {
  res.render('example', { username: 'Julian' })
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await UserRepository.login({ username, password })
    const token = jwt.sign({ id: user.id, username: user.username }, 'secretToken', {
      expiresIn: '1h'
    })
    res
      .cookie('access-token', token, {
        httpOnly: true, // The cookie is available only in the server
        secure: process.env.NODE_ENV === 'production', // The cookie is only available in https
        samesite: 'strict', // The cookie can just access to the same dominio
        maxAge: 1000 * 60 * 60 // The cookie has a life of just one hour
      })
      .send({ user, token })
  } catch (e) {
    res.status(401).json({ message: e.message })
  }
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await UserRepository.create({ username, password })
    res.status(200).json(user)
  } catch (e) {
    console.log(e)
    res.status(400).json({ error: e.message })
  }
})

app.post('/logout', (req, res) => {

})
app.get('/protected', (req, res) => {
  const token = req.cookies.access_token
  if (!token) return res.status(403).send('Access is not authorized')

  try {
    const data = jwt.verify(token, 'secret_token')
    res.render('protected', data) // {id, username}
  } catch (e) {
    res.status(401).send('Access not authorized')
  }
})

app.listen(PORT, () => {
  console.log(`The server is running on: http://localhost:${PORT}`)
})
