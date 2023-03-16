const asyncHandler = require("express-async-handler")

const Dev = require('../models/devModel')

const getAllDevs = asyncHandler(async (req, res) => {
  // const devs = await Dev.countDocuments({})
  const devs = await Dev.find({}).limit(10)
  res.status(200).json(devs)
})

const getFilteredDevs = asyncHandler(async (req, res) => {
  const devs = await Dev.find({ hourly_rate: { $gte: req.body[0], $lte: req.body[1] } }).sort({ hourly_rate: -1 }).limit(10)
  res.status(200).json(devs)
})

module.exports = {
  getAllDevs,
  getFilteredDevs
}

