const asyncHandler = require("express-async-handler")

const Dev = require('../models/devModel')
const pageSize = 10

const getAllDevs = asyncHandler(async (req, res) => {
  const total = await Dev.countDocuments({});
  const devs = await Dev.find({}).limit(10)
  res.status(200).json({
    totalPages: Math.ceil(total / pageSize),
    devs
  })
})

const getFilteredDevs = asyncHandler(async (req, res) => {
  let priceParam = req.body.order.highLow
  let starParam = 0
  const pageNumber = req.query.page

  req.body.order.starDescending ? starParam = -1 : starParam = 0
  const total = await Dev.countDocuments({});

  const devs = await Dev.find({
    hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] }
  }).sort({ hourly_rate: priceParam, star_rating: starParam }).limit(pageSize)
    
  res.status(200).json({
    totalPages: Math.ceil(total / pageSize),
    devs
  })
})

module.exports = {
  getAllDevs,
  getFilteredDevs
}



// req.query.page
// .limit
// .skip