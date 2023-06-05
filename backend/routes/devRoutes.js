const express = require('express')
const router = express.Router()

const {
  getFilteredDevs,
} = require('../controllers/devController')

router.route('/').post(getFilteredDevs)


module.exports = router