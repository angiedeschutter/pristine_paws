import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams} from "react-router"
import { CurrentUser } from '../contexts/CurrentUser'


function Edit() {
    const { serv } = useParams()
    const { currentUser } = useContext(CurrentUser)
    const navigate = useNavigate()
    let {service_id}= useParams()
    const[service, setService] = useState({
        dog_name:'',
        breed:'',
        size:'',
        pack:'',
        date:'',
        time:''
    })
   
    useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:4000/service/appointment/${service_id}`)
			const resData = await response.json()
			setService(resData)
		}
		fetchData()
	}, [ serv ])
    
    

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
            <h1> Chose the services for your dog</h1>
            <form method='POST' onSubmit={editAppt}>
                <div>
                    <label htmlFor='dogName'> Dog's Name</label>
                    <input id='dogName' name='dogName' value={service.dog_name}  onChange={(e) => service.setDog_name(e.target.value) } required></input>
                </div>
                <div>
                    <label htmlFor='breed'> Breed</label>
                    <input id='breed' name='breed' value={service.breed}  onChange={(e) => service.setBreed(e.target.value)} required></input>
                </div>
                <div>
                    <label for="size">Dog Size:</label>
                    <select name="size" id="size" value={service.size}  onChange={(e) => service.setSize(e.target.value)} required>
                        <option value='' selected disabled hidden>Select Your Dog's Weight Range</option>
                        <option value="X-Ssmall">Less than 10 lbs</option>
                        <option value="Small">Less than 10 lbs</option>
                        <option value="Medium">11-25 lbs</option>
                        <option value="Large">26-50 lbs</option>
                        <option value="X-Large">Larger than 50 lbs</option>
                    </select>
                </div>
                <div>
                    <label for="package">Grooming Package:</label>
                    <select name="pack" id="pack" value={service.pack}  onChange={(e) => service.setPack(e.target.value)} required>
                        <option value='' selected disabled hidden>Select a Package</option>
                        <option value="Basic Package">Basic Wash</option>
                        <option value="premium Package">Premium Package</option>
                        <option value="Complete Package">Complete Pamper Package</option>
                        <option value="Nail Clipping">Nail Clipping</option>
                    </select>
                </div>
                <div>
                    <label for="appointment">Scheduled date:</label>
                    <input type="date" id="start" name="appointment" value={service.date}  onChange={(e) => service.setDate(e.target.value)} required/>
                </div>
                <div>
                    <label for="time">Appointment Time:</label>
                    <select name="time" id="time" value={service.time}  onChange={(e) => service.setTime(e.target.value)} required>
                        <option value='' selected disabled hidden>Select a Time</option>
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
                <input type="submit" value="Submit" />
            </form>
            <button onClick={deleteAppt}>Cancel Appointment</button>
        </>
    )
}

export default Edit