const express = require('express') 
const products = require('./data/products')

const app = express()

app.get('/', function (req, res) {
  res.send('API is Running...')
})

app.get('/api/products', function (req, res) {
    res.json(products)
})

app.get('/api/products/:id', function (req, res) {
    const product = products.find( p => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('Server is Running on port 5000'))