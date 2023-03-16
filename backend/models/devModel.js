const mongoose = require('mongoose')

const devSchema = mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  hourly_rate: {
    type: Number,
  },
  star_rating: {
    type: Number,
  }
})

module.exports = mongoose.model('Dev', devSchema)