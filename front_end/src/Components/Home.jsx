import { CurrentUser } from '../contexts/CurrentUser'
import {  useContext } from "react"
function Home() {
    const { currentUser } = useContext(CurrentUser)
    return (
        <>
            <h1>Pristine Paws Grooming Services</h1>
            <img id='homeImg' src='home.jpg' />
        </>
    );
}

export default Home;