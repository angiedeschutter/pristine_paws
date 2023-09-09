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

module.exports=login