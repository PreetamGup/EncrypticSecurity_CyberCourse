import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import AsideBar from './AsideBar'


const Layout2 = () => {
  const navigate= useNavigate();
  
  

  useEffect(()=>{
    if (window.location.pathname==="/dashboard" || window.location.pathname==="/dashboard/"){
      navigate("/dashboard/home")
    }

   
  })

  

  return (
    <div className='layout2'>
       
        <Navbar/>
        <div style={{display:"flex"}}>
            <AsideBar/>
            <div style={{width:"85%"}}>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout2