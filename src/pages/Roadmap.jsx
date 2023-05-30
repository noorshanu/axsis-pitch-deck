import React from 'react'
import Layout from '../Layout'
import RoadmapCard2 from '../components/RoadmapCard2'

function Roadmap() {
  return (
    <Layout title="Roadmap">
      <div
        className={`relative mx-10 sm:bg-[url('/public/assets/RoadmapFrame.svg')] bg-[url('/public/assets/roadmap-sm-bg.svg')]  bg-cover `}
      >
        <img
          src="/assets/RoadmapFrame.svg"
          className={`w-full h-auto invisible 
           sm:flex hidden`}
        />
        <img
          src="/assets/roadmap-sm-bg.svg"
          className={`w-full h-auto px-5 flex sm:hidden invisible`}
        />
        <div
          className={` inset-0 transition-opacity hidden sm:flex absolute duration-500 opacity-100`}
        >
          <RoadmapCard2
            top={'16%'}
            left={'3%'}
            maxw={'12%'}
            h1={'Q3'}
            p1={'Launching Axis Finance'}
            p2={'Lining up first partnerships with Arbitrum protocols'}
            p3={
              'Reaching $2M-$5M TVL in a couple weeks after the platform launch'
            }
          />
          <RoadmapCard2
            top={'16%'}
            left={'33%'}
            maxw={'12%'}
            h1={'Q1'}
            p1={'Launching Axis Finance'}
            p2={'Lining up first partnerships with Arbitrum protocols'}
            p3={
              'Reaching $2M-$5M TVL in a couple weeks after the platform launch'
            }
          />
          <RoadmapCard2
            top={'55%'}
            left={'49.5%'}
            maxw={'16%'}
            h1={'Q3'}
            fontSize={'1vw'}
            p1={'Launching Axis Finance'}
            p2={'Lining up first partnerships with Arbitrum protocols'}
            p3={
              'Reaching $2M-$5M TVL in a couple weeks after the platform launch'
            }
          />
          <RoadmapCard2
            top={'55%'}
            left={'17%'}
            maxw={'12%'}
            h1={'Q4'}
            p1={'Launching Axis Finance'}
            p2={'Lining up first partnerships with Arbitrum protocols'}
            p3={
              'Reaching $2M-$5M TVL in a couple weeks after the platform launch'
            }
          />
          <RoadmapCard2
            top={'5%'}
            left={'66%'}
            maxw={'12%'}
            h1={'Q2'}
            p1={'Launching Axis Finance'}
            p2={'Lining up first partnerships with Arbitrum protocols'}
            p3={
              'Reaching $2M-$5M TVL in a couple weeks after the platform launch'
            }
          />
          <RoadmapCard2
            top={'55%'}
            left={'83%'}
            maxw={'12%'}
            h1={'Q4'}
            p1={'Launching Axis Finance'}
            p2={'Lining up first partnerships with Arbitrum protocols'}
            p3={
              'Reaching $2M-$5M TVL in a couple weeks after the platform launch'
            }
          />
        </div>
        <div className="hidden top-[16%] top-[55%] top-[55%] max-w-[12%] max-w-[16%] text-[1vw] text-[14px] text-[0.65vw] left-[3%] left-[33%] left-[17%] top-[5%] left-[49.5%] left-[66%] left-[83%]" />
      </div>
    </Layout>
  )
}

export default Roadmap
