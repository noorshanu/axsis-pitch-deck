import React from 'react'
import {
  BsBook,
  BsDiscord,
  BsMedium,
  BsTelegram,
  BsTwitter,
} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="w-full self-end flex justify-between items-center px-5 py-3">
      <img src="/assets/logo.svg" className='w-[25vw] h-auto  sm:h-12 sm:w-auto'/>
      <div className="flex gap-[3vw] sm:gap-5">
        <BsTwitter className='w-[3vw] h-auto sm:h-7 sm:w-auto text-[#11FF37] cursor-pointer hover:text-white' />
        <BsDiscord className='w-[3vw] h-auto sm:h-7 sm:w-auto text-[#11FF37] cursor-pointer hover:text-white' />
        <BsTelegram className='w-[3vw] h-auto sm:h-7 sm:w-auto text-[#11FF37] cursor-pointer hover:text-white' />
        <BsMedium className='w-[3vw] h-auto sm:h-7 sm:w-auto text-[#11FF37] cursor-pointer hover:text-white' />
        <BsBook className='w-[3vw] h-auto sm:h-7 sm:w-auto text-[#11FF37] cursor-pointer hover:text-white' />
      </div>
      <img src='/assets/backbtn.svg' className='rotate-180 h-auto w-[14vw] sm:h-28 sm:w-auto opacity-90 hover:opacity-100 hover:scale-105 transition-all cursor-pointer'/>
    </div>
  )
}

export default Footer
