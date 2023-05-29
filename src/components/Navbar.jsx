import React from 'react'

function Navbar() {
  return (
    <div className='w-full  h-14 sm:h-28 my-3 px-5 flex justify-center items-center relative'>
     
      <img className='absolute left-2 top-0 bottom-0 h-16 sm:h-28 w-auto opacity-90 hover:opacity-100 hover:scale-105 transition-all cursor-pointer' src='/assets/backbtn.svg'/>
      <h1 className='font-monument text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>INTRODUCTION</h1>
      <div></div>
    </div>
  )
}

export default Navbar