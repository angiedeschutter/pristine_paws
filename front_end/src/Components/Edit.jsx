import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { Link } from 'react-router-dom'



function Edit() {

    const navigate = useNavigate()
    let { service_id } = useParams()
    const [service, setService] = useState({
        dog_name: '',
        breed: '',
        size: '',
        pack: '',
        date: '',
        time: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/service/appointment/${service_id}`)
            const resData = await response.json()
            setService(resData)
        }
        fetchData()
    }, [service_id])



    async function editAppt(e) {
        e.preventDefault()

        await fetch(`http://localhost:4000/service/appointment/${service_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })

        navigate(`/account`)
    }

    //DELETE APPOINTMENT FUNCTION
    const deleteAppt = async () => {
        try {
            await fetch(`http://localhost:4000/service/appointment/${service_id}`,
                { method: "DELETE" })
            navigate('/account') //redirects back to account
        } catch (Error) {
            console.log(Error)
        }
    }


    return (
        <>
            <h1> Edit or Cancel Your Appointment</h1>
            <form method='POST' onSubmit={editAppt} className="apptForm">
                <div className='form'>
                    <label htmlFor='dogName'> Dog's Name:</label>
                    <input id='dogName' name='dogName' defaultValue={service.dog_name} onChange={e => setService({ ...service, dog_name: e.target.value })} required></input>
                </div>
                <div className='form'>
                    <label htmlFor='breed'> Breed:</label>
                    <input id='breed' name='breed' value={service.breed} onChange={e => setService({ ...service, breed: e.target.value })} required></input>
                </div>
                <div className='form'>
                    <label htmlFor="size">Dog Size:</label>
                    <select name="size" id="size" defaultValue={service.size} onChange={e => setService({ ...service, size: e.target.value })} required>
                        <option value="X-Small">Less than 10 lbs</option>
                        <option value="Small">Less than 10 lbs</option>
                        <option value="Medium">11-25 lbs</option>
                        <option value="Large">26-50 lbs</option>
                        <option value="X-Large">Larger than 50 lbs</option>
                    </select>
                </div>
                <div className='form'>
                    <label htmlFor="package">Grooming Package:</label>
                    <select name="pack" id="pack" defaultValue={service.pack} onChange={e => setService({ ...service, pack: e.target.value })} required>
                        <option value="Basic Package">Basic Wash</option>
                        <option value="premium Package">Premium Package</option>
                        <option value="Complete Package">Complete Pamper Package</option>
                        <option value="Nail Clipping">Nail Clipping</option>
                    </select>
                </div>
                <div className='form'>
                    <label htmlFor="appointment">Scheduled Date:</label>
                    <input type="date" id="start" name="appointment" value={service.date} onChange={e => setService({ ...service, date: e.target.value })} required />
                </div>
                <div className='form'>
                    <label htmlFor="time">Appointment Time:</label>
                    <select name="time" id="time" defaultValue={service.time} onChange={e => setService({ ...service, time: e.target.value })} required>
                        <option value="9:00am">9:00am</option>
                        <option value="10:00am">10:00am</option>
                        <option value="11:00am">11:00am</option>
                        <option value="12:00pm">12:00pm</option>
                        <option value="1:00pm">1:00pm</option>
                        <option value="1:00pm">2:00pm</option>
                        <option value="3:00pm">3:00pm</option>
                        <option value="4:00pm">4:00pm</option>
                    </select>
                </div>
                <input className='button' type="submit" value="Submit" />
            </form>
            <Link to='/account'>Go Back</Link>
            <div>
                <button onClick={deleteAppt}><i className="fa-solid fa-trash"></i> Cancel Appointment</button>
            </div>
        </>
    )
}

export default Edit