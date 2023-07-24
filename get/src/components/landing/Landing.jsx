import React from 'react'
import logo from '../../assets/logo.png'
import '../../styles/landing.css'
const Landing = () => {
  return (
    <div className="container">
      <div className="landingContainer">
        <div className="logoImage">
                <img src={logo} alt="logo" />
        </div>
        <div className="description">
            <div className="description_card">
              <div className="description_container">
                <div className="image">
                  
                </div>
                <div className="about_description">
                  
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
