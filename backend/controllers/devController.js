const asyncHandler = require("express-async-handler")

const Dev = require('../models/devModel')

const getAllDevs = asyncHandler(async (req, res) => {
  // const devs = await Dev.countDocuments({})
  const devs = await Dev.find({}).limit(10)
  res.status(200).json(devs)
})

const getFilteredDevs = asyncHandler(async (req, res) => {
  let priceParam = req.body.order.highLow
  let starParam = 0;

  req.body.order.starDescending ? starParam = -1 : starParam = 0

  const devs = await Dev.find({
    hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] }
  }).sort({ hourly_rate: priceParam, star_rating: starParam }).limit(30)
    
  res.status(200).json(devs)
})

module.exports = {
  getAllDevs,
  getFilteredDevs
}