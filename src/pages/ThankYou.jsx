import React from 'react'
import Layout from '../Layout'

function ThankYou() {
  return (
    <Layout>
        <div className='text-center mx-auto'>
            <img src="assets/thank.svg" alt="" />
            <h1 className='font-arc text-6xl text-white font-bold mt-8 mb-5'>THANK YOU!</h1>
            <div className='flex justify-center gap-4 mt-8'>
                <img src="assets/btn.png" alt="" />
                <img src="assets/btn2.png" alt="" />


            </div>
        </div>
    </Layout>
  )
}

export default ThankYou