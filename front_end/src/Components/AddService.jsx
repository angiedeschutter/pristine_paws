import { useState, useContext } from "react"
import { useNavigate} from "react-router"
import { CurrentUser } from '../contexts/CurrentUser'


function AddService() {

    const { currentUser } = useContext(CurrentUser)
    const navigate = useNavigate()
    const [dog_name, setDog_name] = useState('')
    const [breed, setBreed] = useState('')
    const [size, setSize] = useState('')
    const [pack, setPack] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [user_id, setUser_id]=useState(currentUser.user_id)
    
  

    const newService = async (e) => {
        e.preventDefault()
        const newAppt= { dog_name, breed, size, pack, date, time, user_id}
        const response = await fetch(`http://localhost:4000/service`, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAppt)
        })
        .then((response) => response.json())
        console.log(response)
        navigate('/account')
    }

    return (
        <>
            <h1> Chose the services for your dog</h1>
            <form method='POST' onSubmit={newService} className="apptForm">
                <div >
                    <label htmlFor='dogName' className="form"> Dog's Name</label>
                    <input id='dogName' name='dogName' value={dog_name}  onChange={(e) => setDog_name(e.target.value) } required></input>
                </div>
                <div>
                    <label htmlFor='breed' className="form"> Breed</label>
                    <input id='breed' name='breed' value={breed}  onChange={(e) => setBreed(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="size" className="form">Dog Size:</label>
                    <select name="size" id="size" value={size}  onChange={(e) => setSize(e.target.value)} required>
                        <option value='' selected disabled hidden>Select Dog's Weight Range</option>
                        <option value="X-Small">Less than 10 lbs</option>
                        <option value="Small">Less than 10 lbs</option>
                        <option value="Medium">11-25 lbs</option>
                        <option value="Large">26-50 lbs</option>
                        <option value="X-Large">Larger than 50 lbs</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="package" className="form">Grooming Package:</label>
                    <select name="pack" id="pack" value={pack}  onChange={(e) => setPack(e.target.value)} required>
                        <option value='' selected disabled hidden>Select a Package</option>
                        <option value="Basic Package">Basic Wash</option>
                        <option value="premium Package">Premium Package</option>
                        <option value="Complete Package">Complete Pamper Package</option>
                        <option value="Nail Clipping">Nail Clipping</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="appointment" className="form">Scheduled date:</label>
                    <input type="date" id="start" name="appointment" value={date}  onChange={(e) => setDate(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="time" className="form">Appointment Time:</label>
                    <select name="time" id="time" value={time}  onChange={(e) => setTime(e.target.value)} required>
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
                <input type="submit" value="Submit" className="button"/>
            </form>
        </>
    )
}

export default AddService