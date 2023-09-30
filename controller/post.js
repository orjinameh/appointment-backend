const mongoose = require('mongoose')
const Goal = require('../models/post')


// @desc POST user text
// @route POST/data/me/post
// @access PRIVATE
const Post = async (req, res) => {
    // if (!req.body.text){
    //     res.status(401)
    //     throw Error('Please input a text field')
    // }

    const goal = await Goal.create({
        user: req.user.id,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        phone: req.body.phone,
    })

    res.status(200).json(goal)
}


// @desc GET user appointments
// @route POST/data/me/get
// @access PRIVATE
const Get = async (req, res) => {

    const goal = await Goal.find({ user: req.user.id })

    res.status(200).json(goal)
}


// @desc GET user appointments
// @route POST/data/me/getall
// @access PRIVATE
const GetAll = async (req, res) => {

    const goal = await Goal.find({})

    res.status(200).json(goal)
}


// @desc UPDATE user data
// @route POST/data/me/patch
// @access PRIVATE
const Patch = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : `"aptn does not exist",${id}`})
    }
    const update = { ...req.body }
    const goal = await Goal.findOneAndUpdate({ user: req.user.id, _id: id }, update)
    res.status(200).json(goal)
}

module.exports = { Post, Get, Patch, GetAll }