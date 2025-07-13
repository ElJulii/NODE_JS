import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://127.0.1:5500',
  'http://localhost:5500',
  'http://localhost:1234',
  'https://movies.com',
  'https://midu.dev'
]

// export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
//   origin: (origin, callback) => {
//     if (acceptedOrigins.includes(origin)) {
//       return callback(null, true)
//     }

//     if (!origin) {
//       return callback(null, true)
//     }

//     return callback(new Error('Not allowed by CORS'))
//   }
// })
