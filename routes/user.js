const express = require('express');

const router = express.Router();

const {loginUser,registerUser,getMe}=require('../controller/user')
const {protect} =  require('../middleware/authmiddleware')
const {Post,GetAll, Get, Patch} = require('../controller/post')

//Login route
router.post('/auth/login', loginUser)


//Signup route
router.post('/auth/signup', registerUser)


//getMe route
router.get('/me',protect, getMe)

// POST a text by dedicate user
router.post('/me/post',protect, Post)


//getMe route
router.get('/me/get',protect, Get)

//getMe route
router.get('/me/getall',protect, GetAll)

//patchData route
router.patch('/me/patch/:id',protect, Patch)

module.exports = router;