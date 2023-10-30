import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import AsideBar from './AsideBar'

const Layout2 = () => {
  return (
    <div className='layout2'>
        <Navbar/>
        <div style={{display:"flex"}}>
            <AsideBar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout2