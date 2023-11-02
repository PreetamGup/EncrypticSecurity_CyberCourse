import React from 'react'
import "../styles/Layout2/AsideBar.css"
import { NavLink } from 'react-router-dom'

const AsideBar = () => {
  return (
    <aside className='asideBar'>
        <nav className='dashboardnavbar'>
           <NavLink to="home" 
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "dashboardActive" : ""
                }> 
            <span>Dashboard</span>         
            </NavLink>

           <NavLink to="feedbackform" 
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "dashboardActive" : ""
              }> 
            <span>Feedback Form</span>
           </NavLink>


           <NavLink to="appliedform" 
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "dashboardActive" : ""
              }> 
            <span>Applied Form</span>
           </NavLink>

           <NavLink to="blogs" 
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "dashboardActive" : ""
              }> 
            <span>Blogs</span>
           </NavLink>
           
        </nav>
    </aside>
  )
}

export default AsideBar