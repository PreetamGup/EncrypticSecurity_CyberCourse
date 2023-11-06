import '../styles/Navbar.css'
import  { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setLogin } from '../redux/features/userSlice'
import axios from 'axios'


const Navbar = () => {
    const[colorChange, setColorChange]=useState(false);
    const[closeMenu, setCloseMenu]= useState(false);
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn)
    const userName= useSelector((state)=> state.user.user.name)
    const navigate= useNavigate();
    const dispatch = useDispatch();

   async function handleLogout(e){

        try {
            const response = await axios.get(process.env.REACT_APP_API_V1 + "/logout", {withCredentials:true})
            localStorage.clear();

            dispatch(setUser({}));
            dispatch(setLogin(false));
            navigate("/")
        } catch (error) {
            console.warn(error)
        }
        
    }

    function handleScroll(){
        
        if(window.scrollY>50){
            setColorChange(true)
        }else{
            setColorChange(false)
        }
    }

    window.addEventListener('scroll', handleScroll);

    

  return (
    <nav className={`navbar d-flex flex-row justify-content-start pt-2 ${colorChange?"scrollEffectNav": ""}`}>
       <div className="logodiv">
            <img src= {require('../Images/ESNewLogo.png')} alt="logo"   />
       </div>
        
        <div className="navigationDiv ">
            <ul className='d-flex flex-row navbar-nav '>
                <li className='p-2'>
                    <NavLink to="/" activeClassName='active'>Home</NavLink>
                </li>
                
                {
                    isLoggedIn? 
                    <li className='p-2'>
                        <NavLink to="/dashboard/home" >Dashboard</NavLink>
                    </li>
                    :
                    ""
                }

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
            {
                isLoggedIn?
                <div>
                    <span>Hi, {` ${userName}   `}</span>
                    <button onClick={handleLogout}>Logout</button> 
                </div>
                :
                <button onClick={()=>navigate("/login")}>Login</button>
            }
            
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
                    <li className='p-2'><NavLink to='blogs'>Blog</NavLink></li>
                    <li className='p-2'><NavLink to='about'>About Us</NavLink></li>
                    <li className='p-2'><NavLink to='contact'>Contact Us</NavLink></li>
                    {
                        isLoggedIn?
                        <li className='p-2' onClick={handleLogout}>Logout</li> 
                        :
                        <li className='p-2'><NavLink to='login'>Login</NavLink></li>
                       
                    }

                    
                </ul>
            </div>
        </div>

    </nav>

  )
}

export default Navbar