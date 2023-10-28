import React from 'react'
import "../styles/Login.css"

const Login = () => {
  return (
    <div className='loginContainer'>
        <div className="logoLogin">
            <img src= {require('../Images/ESNewLogo.png')} alt="logo"   /> 
            <p>
                The world needs more cybersecurity and data science professionals.<br/> Are you ready to answer the call?
            </p>  
        </div>

        <div className="formLogin">
            <form action="">
                <h2>User login</h2>
                <div className='emailDiv'>
                    <div className='loginIcon'>
                        <i class="bi bi-person"></i>
                    </div>
                    <input type="text" placeholder='Email' required />
                </div>
                <br />
                <div className='passwordDiv'>
                    <input type="password" placeholder='Password' required />
                    <div className='loginIcon'>
                        <i class="bi bi-key"></i>
                    </div>
                </div>
                <br />
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login