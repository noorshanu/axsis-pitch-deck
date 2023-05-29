import React from 'react'
import Layout from '../Layout'

const Intro = () => {
  return (
    <Layout title={"INTRODUCTION"}>
        <div className=''>

      <p className='font-red-hat text-white text-center my-10 max-w-3xl mx-auto'>
        Comprehensive DeFi platform on Arbitrum with Gasless multichain
        swap,Gasless lending and borrowing, layer 2 futures/options trading,
        Secure LBP Launchpad, Staking as a Service and yield aggregator.{' '}
      </p>
      <img src="/assets/intro.svg" className="w-full h-auto opacity-75 mb-10" />
        </div>
    </Layout>
  )
}

export default Intro
