const auth = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { Login } = db

auth.get('/profile', async (req, res) => {
    try {
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod == 'Bearer') {

            const result = await jwt.decode(process.env.SECRET_TOKEN, token)

            const { id } = result.value

            let user = await Login.findOne({
                where: {
                    user_id: id
                }
            })
            res.json(user)
        }
    } catch {
        res.json(null)
    }
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
        const results = await jwt.encode(process.env.SECRET_TOKEN, { id: user.user_id })
        res.json({ user: user, token: results.value })
    }
})



module.exports = auth

