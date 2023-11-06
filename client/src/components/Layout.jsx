import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Layout = ({children}) => {
  return (
    <div className='layoutContainer'>
        <Navbar></Navbar>
        <ScrollToTop/>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default Layout