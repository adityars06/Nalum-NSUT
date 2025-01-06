import React, { useState } from 'react'
import { Outlet,useOutletContext} from 'react-router-dom'
import SideNav from './SideNav'


function Layout() {
  const [name,setName]=useState('Aditya Raj Singh');
  return (
    <div className='flex'>
      <SideNav/>
      <Outlet context={{name,setName}}/>
      
    </div>
  )
}

export default Layout
