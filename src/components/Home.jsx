import React from 'react'

function Home() {
  return (
    <>
    <div className='flex  mt-16 '>
      <img src='https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/315090113_122750727282320_5796185785117448161_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Xusxx67Ylm8Q7kNvgF5tdr2&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=A-pBEkzwr6ezzG6HE6FUKQ9&oh=00_AYDgV9WSWhS5pJDig-uEhElVMJVNy4F6dFpM1OuUjfHWHw&oe=6780B1EE' className=' h-96 rounded-md ml-4 ' />
      <div className='flex flex-col font-mono items-center  gap-3 w-full'>
        <h1 className='text-brick text-8xl mt-20'>NALUM NSUT</h1>
        <h3 className='text-crimson text-lg typing-effect '>Connecting The NSUT Club around the world</h3>
        <p className=' text-crimson font-bold text-xl tracking-wider mt-5'>ReConnect, Collaborate, Engage, Empower</p>
      </div>
    </div>
    <div className='About mt-16 font-mono p-4 mb-20'>
        <h1 className='m-auto w-fit text-6xl font-bold text-brick'>ABOUT US</h1>
        <section className='flex h-80 mt-10'>
          <p className='font-mono text-crimson mt-5 font-semibold'>
          Whether you're here to reconnect, expand your professional network, support NSUT's growth, or explore the impact of giving back, you're in the right place. Our portal offers you a seamless way to engage with the vibrant NSUT community, get involved with alumni activities, and discover opportunities to contribute.
          
          <span className=' block my-5'>
          For those looking to give back, we'll guide you on how to make a difference, where your support matters most, and the legacy it leaves behind. If you're here to reconnect, explore our network, career services, and upcoming alumni events. Discover the NSUT that inspires you.
          </span>
          <br/>
          <span className='block'>
          Alumni, students, and friends like you fuel NSUT's journey toward greater heights. Join us and stay proud to be part of the NSUT family.
          </span>
          
          </p>
          <img src='https://media.licdn.com/dms/image/v2/D5622AQEN5rmXHU_64A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728213560542?e=1738800000&v=beta&t=ULKiRCMRgMVTna1jqU3SNaKnR-kg8kBN-2ymuI7gq3I' className='object-contain rounded-md '/>


        </section>
    </div>
    </>
    
  )
}

export default Home
