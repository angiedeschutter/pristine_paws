import { useState } from "react"
import { useNavigate } from "react-router"

function SignUp() {
    const navigate = useNavigate()
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const createNewUser = async (e) => {
        e.preventDefault()
        const newUser = { first_name, last_name, email, password }
        const response = await fetch(`http://localhost:4000/login`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
            .then((response) => response.json())
        navigate('/')
    }

    return (
        <>
            <h1> Create A New Account</h1>
            <form method='POST' onSubmit={createNewUser}>
                <div className="login">
                    <div className="inputs">
                        <label htmlFor='firstName'> First Name</label>
                        <input id='firstName' name='firstName' value={first_name} onChange={(e) => setFirst_name(e.target.value)} required></input>
                    </div>
                    <div className="inputs">
                        <label htmlFor='lastName'> Last Name</label>
                        <input id='lastName' name='lastName' value={last_name} onChange={(e) => setLast_name(e.target.value)} required></input>
                    </div>
                    <div className="inputs">
                        <label htmlFor='email' > Email</label>
                        <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="inputs">
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>
                    <input className='button' type="submit" value="Submit" />
                </div>
            </form>
        </>
    )
}

export default SignUp