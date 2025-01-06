import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import './App.css'
import Home from './components/Home'
import Profile from './components/profile/Overview'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header/>
      
      <Outlet/>
      
      
      <Footer/>
    </div>
      
    </>
  )
}

export default App
