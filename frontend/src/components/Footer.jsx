import React from 'react'

const Footer = () => {
  return (
    <div className='bg-c1 flex flex-col p-10 items-center justify-center text-center'>
        <h2 className='text-sh4 text-mdl font-semibold md:text-md'>Konett - Empowering Innovation</h2>
        <p className='text-white md:text-sm'>Copyright © {new Date().getFullYear()} Konett. All rights reserved.</p>
    </div>
  )
}

export default Footer