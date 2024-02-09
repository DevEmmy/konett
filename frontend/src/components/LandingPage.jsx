import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import JoinCommunity from './JoinCommunity'
import Features from './Features'
import Join from './Join'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-20'>
        <div className='bg-[#EEFBFF] h-[100vh]'>
            <Nav />

            <Hero />
        </div>

        <JoinCommunity />
        <Features />
        <Join />
        <Footer />
    </div>
  )
}

export default LandingPage