
import { Navbar, Nav, Container } from 'react-bootstrap'
import { CurrentUser } from '../contexts/CurrentUser'
import {useContext, useEffect} from 'react'

export default function NavigationBar() {

    const { currentUser } = useContext(CurrentUser)

    let login = (
        <>
            <Nav.Link href="login">Login</Nav.Link>
        </>
    )
    const logout=()=>{
        localStorage.removeItem('token')
        window.location.href = "/"
    }
    if (currentUser) {
        login = (
            <>
                 <Nav.Link href="account">{currentUser.first_name} {currentUser.last_name}'s Account</Nav.Link>
                 <button onClick={logout}>Log Out</button>
            </>
        )
    }

    return (
        <>
            <Navbar>
                <Container>
                <img id='logo'height={100}/>
                    <Nav className="me-auto ">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="services">Services</Nav.Link>
                        
                        {login}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

