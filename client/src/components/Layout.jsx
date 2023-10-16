import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className='layoutContainer'>
        <Navbar></Navbar>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default Layout