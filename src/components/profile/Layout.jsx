import React, { useState } from 'react'
import { Outlet,useOutletContext} from 'react-router-dom'
import SideNav from './SideNav'
import UserProvider from '../../context/userContext'


function Layout() {
  
  return (
      <UserProvider>
        <div className='flex'>
        <SideNav/>
        <Outlet/>
        </div>
      </UserProvider>
      
    
    
  )
}

export default Layout
