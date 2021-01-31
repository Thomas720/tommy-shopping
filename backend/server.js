import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

// Allow us to accept json data in body 
// app.use(express.json())
// app.use(express.urlencoded())
app.use(bodyParser.json())

// For test Purpose(server)
app.get('/', function (req, res) {
  res.send('API is Running...')
})

// Main route
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


// Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is Running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold))