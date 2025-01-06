import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Layout from './components/profile/Layout.jsx'
import Overview from './components/profile/Overview.jsx'
import UpdateProfile from './components/profile/UpdateProfile.jsx'
import Setting from './components/profile/Setting.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='Profile' element={<Layout/>}>
        <Route path='' element={<Overview/>} />     
        <Route path='UpdateProfile' element={<UpdateProfile/>} /> 
        <Route path='Settings' element={<Setting/>} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
