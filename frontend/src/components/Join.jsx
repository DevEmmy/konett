import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const Join = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center px-[5.7%] text-center'>
        <h2 className='text-c1 font-semibold text-mdl'>Join Konett Today!</h2>
        <p className='text-center'>It's free to join and takes just a few minutes to get started!</p>
        <Link className='w-fit m-auto' href={"/sign-up"}>
                <div className='p-3 px-5 rounded-full cs text-sm bg-c1 text-white  flex items-center gap-2'>
                    Get Started
                    <RiArrowRightLine className='font-bold' fontWeight={900} />
                </div>
        </Link>
    </div>
  )
}

export default Join