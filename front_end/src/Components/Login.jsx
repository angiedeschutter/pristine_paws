import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useNavigate} from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

function Login() {
    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState(null)

  
   
    const authUser = async (e) => {
    e.preventDefault()
    const user={email, password}
    const response = await fetch(`http://localhost:4000/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        
    })
    

    const data = await response.json()

    if (response.status === 200) {
        setCurrentUser(data.user)
        console.log(data.token)
        localStorage.setItem('token', data.token)
        navigate(`/account`)
    } else {
        setErrorMessage(data.message)
        alert('incorrect login information provided')
    }
}
  


    return (
        <>
            <div>
                <h1> Have an account?</h1>
                <form onSubmit={authUser}>
                    <div>
                        <label htmlFor='email'> Email</label>
                        <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <h2>Need an account? Sign Up</h2>
                <Link to={'/signup'}>Create an Account</Link>
            </div>
        </>
    )

}

export default Login