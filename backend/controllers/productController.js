import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @description      Fetch all product
// @route            GET/api/product
// @access           Public rouete any one can access

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    
    res.json(products)
})

// @description      Fetch single product
// @route            GET/api/product/id
// @access           Public rouete any one can access
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {

        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getProducts,
    getProductById
}