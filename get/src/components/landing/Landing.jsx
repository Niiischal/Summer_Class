import React from 'react'
import logo from '../../assets/logo.png'
import '../../styles/inputs.css'
import '../../styles/landing.css'
import Button from '../Button'

const Landing = () => {
  return (
    <div className="container">
      <div className="landingContainer">
        <div className="logoImage">
                <img src={logo} alt="logo" />
        </div>
        <div className="description">
            <div className="description_card">
               <h5>GetBooks: A haven for bibliophiles and literary wanderers. Step into a world of enchanting tales and endless possibilities. Our cozy book store welcomes you with shelves adorned in a rich tapestry of genres, from classics to contemporary bestsellers, and everything in between. Immerse yourself in the intoxicating aroma of fresh paper and ink as you lose track of time, discovering hidden treasures and timeless stories. Whether you seek to escape reality or deepen your knowledge, Between the Pages Book Emporium is the gateway to limitless imagination and a community of passionate readers. Let the words embrace you, and let your journey begin.</h5>
               <div className="explore">
               <Button label="Explore"/>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
