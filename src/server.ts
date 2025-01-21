import app from './app'
import config from './app/config'
import mongoose from 'mongoose'

async function main() {
  try {
    app.listen(config.port, () => {
      console.log(`The app listening on port ${config.port}`)
    })

    await mongoose.connect(config.database_url as string)
  } catch (err) {
    console.log(err)
  }
}
main()
