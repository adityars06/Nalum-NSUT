import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  

  
  return (
    <nav className='bg-brick w-full flex items-center'>
      <ul className='flex items-center ml-4'>
      <img src="https://res.cloudinary.com/dr7iepp6t/image/upload/v1686335119/venatus/other%20assets/nsut_feed7b.png" className='h-24 p-2 mx-4' />
      <NavLink to='/'> <h1 className='mx-16 text-8xl font-mono tracking-wider text-white font-extrabold '>NALUM</h1></NavLink>
      
      <div className='links flex text-white font-mono tracking-widest text-lg items-center ml-44 gap-10'>
        <NavLink to='/' className={()=>`button`}>About</NavLink>
        <NavLink className={()=>`button`}>Events</NavLink>
        <NavLink className={()=>`button`}>Startups</NavLink>
        <NavLink className={()=>`button`}>Alumni</NavLink>
        <button class="button">Donate</button>
        <NavLink to='/Profile'><img src='https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=FFFFFF' className='h-14 ml-14 '/></NavLink>
        
        </div>
        
      

      </ul>
      
    </nav>
  )
}

export default Header
