import express from 'express'
const router = express.Router()
import { 
    authUser, 
} from '../controllers/userController.js'



router.post('/users/login', authUser)



export default router