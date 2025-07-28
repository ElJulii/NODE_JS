import { Pool } from 'pg'

export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'class-6',
  password: 'Arlet_0804',
  post: 5432
})
