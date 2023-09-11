import { CurrentUser } from '../contexts/CurrentUser'
import {  useContext } from "react"
function Services() {
    const { currentUser } = useContext(CurrentUser)
    return (

        <div class='services'>
            <div class='box'>
                <div>
                    <h3>Basic Package</h3>
                    <ul>
                        <li><i class="fa-solid fa-paw"></i>Calming Shampoo Wash</li>
                        <li><i class="fa-solid fa-paw"></i>Detangle Conditioner</li>
                        <li><i class="fa-solid fa-paw"></i>Nail Trim</li>
                        <li><i class="fa-solid fa-paw"></i>Gentle Drying</li>
                        <li><i class="fa-solid fa-paw"></i>Ear Cleaning</li>
                    </ul>
                </div>
            </div>
            <div class='box'>
                <div>
                <h3>Premium Package</h3>
                <ul>
                    <li><i class="fa-solid fa-paw"></i>Full Haircut</li>
                    <li><i class="fa-solid fa-paw"></i>Calming Shampoo Wash</li>
                    <li><i class="fa-solid fa-paw"></i>Detangle Conditioner</li>
                    <li><i class="fa-solid fa-paw"></i>Nail Trim</li>
                    <li><i class="fa-solid fa-paw"></i>Gentle Drying</li>
                    <li><i class="fa-solid fa-paw"></i>Ear Cleaning</li>
                </ul>
                </div>
            </div>
            <div class='box'>
            <div>
                <h3>Complete Pamper Package</h3>
                <ul>
                    <li><i class="fa-solid fa-paw"></i>Full Haircut</li>
                    <li><i class="fa-solid fa-paw"></i>Calming Shampoo Wash</li>
                    <li><i class="fa-solid fa-paw"></i>Detangle Conditioner</li>
                    <li><i class="fa-solid fa-paw"></i>Nail Trim</li>
                    <li><i class="fa-solid fa-paw"></i>Gentle Drying</li>
                    <li><i class="fa-solid fa-paw"></i>Ear Cleaning</li>
                    <li><i class="fa-solid fa-paw"></i>Teeth Cleaning</li>
                </ul>
                </div>
            </div>
            <div class='box'>
            <div>
                <h3>Nail Trim</h3>
                <ul>
                    <li><i class="fa-solid fa-paw"></i>Nail Trim Only</li>
                </ul>
                </div>
            </div>
            <div class='box'>
                <img id='servicesImg' src="/services.jpg" />
            </div>
        </div>
    )
}

export default Services