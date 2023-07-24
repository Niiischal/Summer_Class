import React from 'react'
import logo from '../../assets/logo.png'
import '../../styles/landing.css'
const Landing = () => {
  return (
    <div className="container">
      <div className="contents">
        <div className="logoImage">
                <img src={logo} alt="logo" />
        </div>
        <div className="description">
            <div className="description_card">
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
