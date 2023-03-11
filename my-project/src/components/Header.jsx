
import React, { useState } from 'react'



export default function Header() {
    return (
     <div>
      <nav className='  sticky top-0 left-0 z-[999] w-full bg-white px-1 shadow-md md:px-0 lg:px-5'>
        <div className='items-center justify-between gap-3 py-8 px-7 md:grid grid-cols-2 md:w-full md:px-4 lg:px-20'>
        <div className='font-roboto text-xl font-bold text-[#0E563F]'>
          Uniosun Docs
        </div>
        <div className='lg:block hidden'>
          <ul className='flex gap-16' >
            <li><a href="">Home</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Courses</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contacts</a></li>
          </ul>
        </div>


        </div>
       
      </nav>
     </div>
    )
  }


