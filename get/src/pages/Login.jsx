import React from 'react'
import loginImage from '../assets/svgs/login-illustration.svg'
import Button from '../components/Button'
import TextInputs from '../components/TextInputs'
import '../styles/inputs.css'
import '../styles/login.css'

const Login = () => {
  return (
    <>
    <div className="container">
        <div className="loginFormContainer">
            <div className="loginForm">
                <div className="form">
                <form action="">
                    <h1>Login</h1>
                    <div className="textInputs">
                        <TextInputs type="text" placeholder="Username"/>
                        <TextInputs type="password" placeholder="Password"/>
                        <Button label="Login"/>
                    </div>
                </form>
                <div className="contents">
                    <div>Don't have an account?</div>
                    <div style={{
                        textDecoration:'underline',
                        textDecorationColor:'#6315eb',
                        color:'#6315eb',
                        cursor: 'pointer',
                    }}>Signup</div>
                </div>
                </div>
            </div>
            <div className="loginImage">
                <img src={loginImage} alt="login" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
