import '../styles/Navbar.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const[colorChange, setColorChange]=useState(false);
    const[closeMenu, setCloseMenu]= useState(false);
    const navigate= useNavigate();

    function handleScroll(){
        
        if(window.scrollY>50){
            setColorChange(true)
        }else{
            setColorChange(false)
        }
    }

    window.addEventListener('scroll', handleScroll);

  return (
    <nav className={`navbar d-flex flex-row justify-content-start pt-2 pdRL ${colorChange?"scrollEffectNav": ""}`}>
       <div className="logodiv w-25 ">
            <img src= {require('../Images/ESNewLogo.png')} alt="logo"   />
       </div>
        
        <div className="navigationDiv ">
            <ul className='d-flex flex-row navbar-nav '>
                <li className='p-2'>
                    <NavLink to="/" activeClassName='active'>Home</NavLink>
                </li>
                <li className='p-2 '>
                    <div className="dropdown">
                        <button><NavLink to='/course'>Courses</NavLink></button>
                    </div>
                </li>
                <li className='p-2'><NavLink to='/blogs' >Blogs</NavLink></li>
                <li className='p-2'><NavLink to='/about'>About Us</NavLink></li>
                <li className='p-2'><NavLink to='/contact'>Contact Us</NavLink></li>
            </ul>
        </div>
        
        <div className='loginMenu'>
            <button onClick={()=>navigate("/login")}>Login</button>
        </div>
        <div className='navmenu'>
            <i className="bi bi-list" onClick={(e)=>setCloseMenu(!closeMenu)}/>
            <div className= {closeMenu?'navMenuDiv':"navMenuDivNotActive"}>
                <ul className='d-flex flex-column navbar-nav '>
                    <li className='p-2 homeLink'>
                        <NavLink to="/" activeClassName='active'>Home</NavLink>
                        <i className="bi bi-x-lg" onClick={()=>setCloseMenu(!closeMenu)}></i>
                    </li>
                    <li className='p-2 '>
                        <div className="dropdown">
                            <button><NavLink to='course'>Courses</NavLink></button>
                            {/* <div className="dropdown-content">
                                <Link to={"course"}>Hacking</Link><br />
                                <Link to={"course"}>Cyber Security</Link>
                            </div> */}
                        </div>
                    </li>
                    <li className='p-2'><NavLink to='ourteam'>Our Team</NavLink></li>
                    <li className='p-2'><NavLink to='about'>About Us</NavLink></li>
                    <li className='p-2'><NavLink to='contact'>Contact Us</NavLink></li>
                    <li className='p-2'><NavLink to='login'>Login</NavLink></li>
                </ul>
            </div>
        </div>

    </nav>
  )
}

export default Navbar