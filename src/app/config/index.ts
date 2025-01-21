import dotenv from 'dotenv'
dotenv.config({ path: process.cwd() + '/.env' })
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
}
