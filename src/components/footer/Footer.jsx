import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-brick flex flex-col justify-center items-center font-mono p-5  text-white'>
      <p>nsitalumni@gmail.com</p>
      <div className='flex mt-6'>
      <Link to={'http://nsut.ac.in/en/home'} target='_blank'>
      <img src="https://res.cloudinary.com/dr7iepp6t/image/upload/v1686335119/venatus/other%20assets/nsut_feed7b.png" className='h-10 w-10 mx-4' /></Link>
      <Link to={'https://www.instagram.com/nalum.nsut/?hl=en'} target='_blank'>
      <img src="https://img.icons8.com/?size=100&id=870&format=png&color=FFFFFF" className='h-10 w-10 mx-4' /></Link>
      <Link to={'http://nsut.ac.in/en/home'} target='_blank'>
      <img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=FFFFFF" className='h-10 w-10 mx-4' /></Link>
      <Link to={'https://www.linkedin.com/company/alumninet-in/'} target='_blank'>
      <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" className='h-10 w-10 mx-4' /></Link>
      </div>
      
    </div>
  )
}

export default Footer
