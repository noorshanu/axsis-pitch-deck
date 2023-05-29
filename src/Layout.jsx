import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="bg-[url('/public/assets/bg.svg')] bg-cover">
      <div className="flex flex-col max-w-7xl mx-auto  min-h-screen justify-between ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
