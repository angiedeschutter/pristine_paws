import { Link, useParams, useNavigate} from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react'
import { CurrentUser } from '../contexts/CurrentUser'

function Account() {
    const navigate=useNavigate()
    const [services, setService] = useState([])
    const { currentUser } = useContext(CurrentUser)
    

    //GET THE SERVICES FROM THE DB WHERE ALL ARE FORM THE SAME USER_ID
    const getServices = async () => {
        try {
            const findServices = await fetch(`http://localhost:4000/service/${currentUser.user_id}`)
            const jsonData = await findServices.json()
            setService(jsonData)
        } catch (Error) {
            console.log(Error)
        }
    }
    
    useEffect(() => {
        getServices()
    }, [])

        //DELETE APPOINTMENT FUNCTION
        const deleteAppt = async () => {
            try {
                await fetch(`http://localhost:4000/service/${services.service_id}`,
                    { method: "DELETE" })
                navigate('/account') //redirects back to account
            } catch (Error) {
                console.log(Error)
            }
        }
  
        //TAKES THE SERVICES FROM DB ABOVE AND PUTS IT INTO A TABLE
        const getServiceList = services.map((services, i) => {
            return (
                <tr key={i} className="tb">
                    <td className="tb">{services.dog_name}</td>
                    <td className="tb">{services.breed}</td>
                    <td className="tb">{services.size}</td>
                    <td className="tb">{services.pack}</td>
                    <td className="tb">{services.date}</td>
                    <td className="tb">{services.time}</td>
                    <td className="tb"><Link ><button>EDIT</button></Link></td>
                    <td className="tb" onClick={deleteAppt}><button >DELETE</button></td>
                </tr>)
        })   
    
      
      
    
    return (
        <>
            <h1>Scheduled Services</h1>
            <table>
                <tr className="tb">
                    <th className="tb">Pet</th>
                    <th className="tb">Breed</th>
                    <th className="tb">Size</th>
                    <th className="tb">Service Package</th>
                    <th className="tb">Date</th>
                    <th className="tb">Time</th>
                    <th className="tb">Edit</th>
                    <th className="tb">Delete</th>
                </tr>
                {getServiceList}
            </table>
            
            <Link to ={`/addservice`}><p>Add new Appointment</p></Link>
            
        </>
    );
}

export default Account;