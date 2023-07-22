import React from 'react'
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
                        <input type="text" placeholder='Enter The Username'/>
                        <input type="password" placeholder='Enter The Password'/>
                        <button>Login</button>
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
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
