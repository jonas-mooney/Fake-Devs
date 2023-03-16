const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const connectDevDb = require('./config/devdb')
const port = process.env.PORT || 5000
const cors = require('cors')

// connectDB()
connectDevDb()

const app = express()

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   next();
// });
// opening access to private networks due to the CORS error https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9#:~:text=Fix%20three%3A%20build%20your%20own%20proxy

app.use(cors({ origin: "http://localhost:5173" }))
// second CORS error solution from fireship.io Youtube video


app.use(express.json())
app.use(express.urlencoded({extended: false}))
// extended: false allows req object to contain strings and arrays (in key value pairs as usual) whereas extended: true will allow any type.
// A new body object containing the parsed data is populated on the request after this middleware runs.

// app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/devs', require('./routes/devRoutes'))
app.use('/', require('./routes/devRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))