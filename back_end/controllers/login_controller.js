const login = require('express').Router()
const db = require("../models")
const { Login } = db

//find all users
login.get('/', async (req, res) => {
    try {
        const foundLogin = await Login.findAll()
        res.status(200).json(foundLogin)
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find users')
    }
})

// CREATE A NEW USER
login.post('/', async (req, res) => {
    try {
        const newUser = await Login.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new user',
            data: newUser
        })
    } catch (Error) {
        res.status(500).json(Error)
    }
})

module.exports=login