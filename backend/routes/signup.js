const express = require('express')
const {
    createAcc,
    getAccs,
    getAcc,
    deleteAcc,
    updateAcc
} = require('../controllers/loginController')

const router = express.Router()

// GET all workouts
router.get('/', getAccs)

// GET a single workout
router.get('/:id', getAcc)

// POST a new workout
router.post('/', createAcc)

// DELETE a workout
router.delete('/:id', deleteAcc)

// UPDATE a workout
router.patch('/:id', updateAcc)

module.exports = router