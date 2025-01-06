import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'

function Layout() {
  return (
    <div className='flex'>
      <SideNav/>
      <Outlet/>
      
    </div>
  )
}

export default Layout
