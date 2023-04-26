const asyncHandler = require("express-async-handler")

const Dev = require('../models/devModel')
const pageSize = 10

const getFilteredDevs = asyncHandler(async (req, res) => {
  const total = await Dev.countDocuments({});
  const pageNumber = req.query.page
  let priceParam = req.body.order.highLow
  let starParam = req.body.order.starDescending
  let devs

  if (starParam) {
    devs = await Dev.find({
      hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] }
    }).sort({ star_rating: -1 }).limit(pageSize)
  }
  else if (priceParam === 1) {
    devs = await Dev.find({
      hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] }
    }).sort({ hourly_rate: -1 }).limit(pageSize)
  }
  else {
    devs = await Dev.find({
      hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] }
    }).limit(pageSize)
  }

  res.status(200).json({
    totalPages: Math.ceil(total / pageSize),
    devs
  })
})

module.exports = {
  getFilteredDevs
}



// req.query.page
// .limit
// .skip