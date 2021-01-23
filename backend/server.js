import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', function (req, res) {
  res.send('API is Running...')
})

app.use('/api/products', productRoutes)

app.use((err, req, res, next) => {
  const error = res.statusCode === 200 ? 500 : res.statusCode
  res.status(error)
  res.json({
    message: err.message,
    stack: process.env.MODE_ENV === 'production' ? null : err.stack
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is Running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold))