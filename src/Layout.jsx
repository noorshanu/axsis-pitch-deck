import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="bg-[url('/public/assets/bg.svg')] bg-cover min-h-screen bg-[#0F0F0F]">

    <div className="flex flex-col max-w-7xl mx-auto  ">
      <Navbar/>
      {children}
      <Footer />
    </div>
    </div>
  )
}

export default Layout
