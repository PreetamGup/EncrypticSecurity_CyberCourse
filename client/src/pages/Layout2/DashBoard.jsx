import React from 'react'
import {  useSelector } from 'react-redux';

const DashBoard = () => {
  const User = useSelector((state) => state.user.user);
   
 
  return (
    <div style={{}}>
       <h1>Dashboard</h1>
    </div>
  )
}

export default DashBoard