const Login = require('../models/loginModel')
const mongoose = require('mongoose')

// get all accounts
const getAccs = async (req, res) => {
    const account = await Login.find({}).sort({createdAt: -1})

    res.status(200).json(account)
}

// get a single account
const getAcc = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Account'})
    }

    const account = await Login.findById(id)

    if (!account) {
        return res.status(404).json({error: 'No such Account'})
    }

    res.status(200).json(account)
}


// create new account
const createAcc = async (req, res) =>{
    const {username, password, weight} = req.body

    let emptyFields = []

    if (!username) {
        emptyFields.push('username')
    }
    if (!password) {
        emptyFields.push('password')
    }
    if (!weight) {
        emptyFields.push('weight')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    
    // add doc to db
    try {
        const account = await Login.create({username, password, weight})
        res.status(200).json(account)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteAcc = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Account'})
    }

    const account = await Login.findOneAndDelete({_id: id})

    if (!account) {
        return res.status(400).json({error: 'No such Account'})
    }

    res.status(200).json(account)
}

// update a workout
const updateAcc = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Account'})
    }

    const account = await Login.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!account) {
        return res.status(400).json({error: 'No such Account'})
    }

    res.status(200).json(account)
}

module.exports = {
    getAccs,
    getAcc,
    createAcc,
    deleteAcc,
    updateAcc
}