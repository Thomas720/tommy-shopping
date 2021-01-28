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
    token: generateToken(user._id)

})
 } else {
     res.status(401)
     throw new Error('Invalid Email and password')
 }


})

export { authUser }