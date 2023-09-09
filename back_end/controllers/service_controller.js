const service = require('express').Router()
const db = require("../models")
const { Service } = db

//find all users
service.get('/', async (req, res) => {
    try {
        const foundService = await Service.findAll()
        res.status(200).json(foundService)
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find services')
    }
})

module.exports=service