const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connectDevDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DEV_URI)
    console.log(`dev db connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDevDb