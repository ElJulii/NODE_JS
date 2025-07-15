import { Pool } from 'pg'

export const pool = new Pool({
  config: 'localhost',
  user: 'postgres',
  database: 'course-node-movies',
  password: 'Arlet_0804',
  port: 5432
})
