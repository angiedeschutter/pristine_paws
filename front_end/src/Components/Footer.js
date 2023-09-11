import {  useContext } from "react"
import { CurrentUser } from '../contexts/CurrentUser'
function Footer() {
    const { currentUser } = useContext(CurrentUser)
    return (
        <>
            <div className='footer'>
                <p>Pristine Paws</p>
            </div>
        </>
    );
}

export default Footer;