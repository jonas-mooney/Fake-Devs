const express = require('express')
const router = express.Router()

const {
  getAllDevs,
  getFilteredDevs,
} = require('../controllers/devController')

router.route('/').get(getAllDevs)
router.route('/devs').post(getFilteredDevs)


module.exports = router