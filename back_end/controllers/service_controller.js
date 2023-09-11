const service = require('express').Router()
const db = require("../models")
const { Service } = db

//FIND ALL APPOINTMENTS
service.get('/', async (req, res) => {
    try {
        const foundServices = await Service.findAll()
        res.status(200).json(foundServices)
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find services')
    }
})

//FIND ONE APPOINTMENT
service.get('/appointment/:service_id', async (req, res) => {
    try {
        const foundService = await Service.findOne({
            where: { service_id: req.params.service_id }
        })
        res.status(200).json(foundService)
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find services')
    }
})


// FIND All APPOINTMENTS FOR USER
service.get('/:user_id', async (req, res) => {
    try {
        const foundAppointments = await Service.findAll({
            where: { user_id: req.params.user_id }
        })
        res.status(200).json(foundAppointments)
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find appointments')
    }
})

// CREATE A NEW SERVCE APPOINTMENT
service.post('/', async (req, res) => {
    try {
        const newAppt = await Service.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new appointment',
            data: newAppt
        })
    } catch (Error) {
        res.status(500).json(Error)
    }
})

// UPDATE AN APPOINTMENT
service.put('/service/:service_id', async (req, res) => {
    try {
        const updatedService = await Service.update(req.body, {
            where: {
                service_id: req.params.service_id
            }
        })
        res.status(200).json({
            message: `Successfully updated Appointment`
        })
    } catch (Error) {
        res.status(500).json(Error)
    }
})

// DELETE AN APPOINTMENT
service.delete('/service/:service_id', async (req, res) => {
    try {
        const deleteService = await Service.destroy({
            where: {
                service_id: req.params.service_id
            }
        })

        res.status(200).json({
            message: `Successfully deleted Appointment`
        })
    } catch (Error) {
        res.status(500).json(Error)
    }
})


module.exports=service