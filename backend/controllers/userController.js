import asyncHandler from 'express-async-handler'
import User from '../models/userModels.js'
import generateToken from '../utils/generateToken.js'

// @description      Auth the user & get token
// @route            POST/api/user/login
// @access           Public 

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

 const user = await User.findOne({ email })

 if(user && (await user.matchPassword(password))) {
res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),

})
 } else {
     res.status(401)
     throw new Error('Invalid Email and password')
 }


})

// @description      Register a new user
// @route            POST/api/users
// @access           Public 

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
  
    const userExist = await User.findOne({ email })
    
    if(userExist) {
        res.status(400)
        throw new Error('User already exist')
    }

    const user = await User.create({
        name,
        email,
        password
    })
  
    if(user) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        
        })   

    } else {
        res.status(404)
        throw new Error('User not foun')
    }
  
  })

// @description      Get user profile
// @route            POST/api/user/profile
// @access           Private

const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)
  
   if(user) {
  res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
   } else {
       res.status(401)
       throw new Error('User not found')
   }
  
  
  })

export { authUser, getUserProfile, registerUser }