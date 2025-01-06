import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNav() {
  
  return (
    <div className='flex flex-col min-h-svh bg-white bg-opacity-1 backdrop-blur-lg backdrop-brightness-125 rounded-lg shadow-lg p-6 border border-white/20'>
      
        <NavLink to='' end className={({isActive})=>`${isActive?'text-yellow-300':'text-white'} sideNav`}>Overview</NavLink>
        <NavLink to='UpdateProfile' className={({isActive})=>` ${isActive?'text-yellow-300':'text-white'} sideNav`}>Update Profile</NavLink>
        <NavLink to='Settings' className={({isActive})=>` ${isActive?'text-yellow-300':'text-white'} sideNav`}>Settings</NavLink>

    </div>
  )
}

export default SideNav





