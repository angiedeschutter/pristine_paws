const auth = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { Login } = db

auth.get('/profile', async (req, res) => {
    res.json(req.currentUser)
})

auth.post('/', async (req, res) => {

    let user = await Login.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({
            message: `Could not find a user with the provided username and password`
        })
    } else {
        const results = await jwt.encode(process.env.SECRET_TOKEN, { id: user.userId })
        res.json({ user: user, token: results.value })
    }
})



module.exports = auth


