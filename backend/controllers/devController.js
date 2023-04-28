const asyncHandler = require("express-async-handler")

const Dev = require('../models/devModel')
const pageSize = 10

const getFilteredDevs = asyncHandler(async (req, res) => {
  const pageNumber = req.query.page
  let priceParam = req.body.order.highLow
  let starParam = req.body.order.starDescending
  let devs
  let total

  if (starParam) {
    const [devsRaw, totalFilteredDevs] = await Promise.all([
      Dev.find({ hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] } }).sort({ star_rating: -1 }).exec(),
      Dev.countDocuments({ hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] } })
    ]);

    devs = devsRaw.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    total = totalFilteredDevs;
  }

  else if (priceParam === 1) {
    const [devsRaw, totalFilteredDevs] = await Promise.all([
      Dev.find({ hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] } }).sort({ hourly_rate: -1 }).exec(),
      Dev.countDocuments({ hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] } })
    ])

    devs = devsRaw.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    total = totalFilteredDevs
  }

  else {
    const [devsRaw, totalFilteredDevs] = await Promise.all([
      Dev.find({ hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] } }),
      Dev.countDocuments({ hourly_rate: { $gte: req.body.range[0], $lte: req.body.range[1] } })
    ])

    devs = devsRaw.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    total = totalFilteredDevs
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