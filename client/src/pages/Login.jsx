import React from 'react'
import "../styles/Login.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {  useDispatch } from 'react-redux';
import { setUser, setLogin } from '../redux/features/userSlice'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState("");

    
    const dispatch = useDispatch()

    const navigate= useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();        
        try {
            const response = await axios.post(process.env.REACT_APP_API_V1 + "/login",{email, password}, {withCredentials:true});

            if(response.data.success){

                const decode = jwtDecode(response.data.accessToken);

                localStorage.clear();
               
                dispatch(setUser({...decode.user}))
                dispatch(setLogin(true))
                
                
                localStorage.setItem("accessToken", response.data.accessToken)

                navigate("/dashboard/home");

            }else{
                setError(response.data.message)
            }

        } catch (error) {
            console.warn(error)
        }


    }

  return (
    <div className='loginContainer'>
        <div className="logoLogin">
            <img src= {require('../Images/ESNewLogo.png')} alt="logo"   /> 
            <p>
                The world needs more cybersecurity and data science professionals.<br/> Are you ready to answer the call?
            </p>  
        </div>

        <div className="formLogin">
            <form >
                <h2>User login</h2>
                <div className='emailDiv'>
                    <div className='loginIcon'>
                        <i class="bi bi-person"></i>
                    </div>
                    <input type="text" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <br />
                <div className='passwordDiv'>
                    <input type="password" placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <div className='loginIcon'>
                        <i class="bi bi-key"></i>
                    </div>
                </div>
                <br />
                <button onClick={handleSubmit}>Login</button>
                {
                    error===""?"" : 
                    <div style={{color:"red"}}>
                        {error}
                    </div>
                }
            </form>
        </div>
    </div>
  )
}

export default Login