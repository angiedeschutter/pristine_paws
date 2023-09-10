// DEPENDENCIES
require('dotenv').config()
const PORT = process.env.PORT
const express= require('express')
const app = express()
const cors = require('cors')
//const path = require("path")
const { Sequelize } = require('sequelize')

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Pristine Paws'
    })
})


// Controllers
const loginController = require('./controllers/login_controller')
app.use('/login', loginController)

app.use('/service', require('./controllers/service_controller'))




try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
  
