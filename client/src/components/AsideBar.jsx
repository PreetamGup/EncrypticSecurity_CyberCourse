import React from 'react'
import "../styles/Layout2/AsideBar.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AsideBar = () => {
  const role = useSelector((state)=> state.user.user.role)

  return (
    <aside className='asideBar'>

      {
        role==="Admin" 
        ?
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

        :
        
        <nav className='dashboardnavbar'>

        </nav>

      }
        
    </aside>
  )
}

export default AsideBar