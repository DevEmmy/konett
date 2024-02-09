import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const Hero = () => {
  return (
    <div className='flex flex-col items-start  mx-auto my-[20vh] md:px-[5.7%] gap-5 w-[70%] md:w-full justify-center text-center'>
        <h1 className='text-lg font-semibold md:text-mdl'>
        Collaborate for <span className="text-sh3 ts">growth. </span>
        Connect Artisans, Startups, Investors, and Mentors.
        </h1>

        <p className='w-[70%] md:w-full m-auto text-sh2'>
        Empower collaboration, innovation, and growth with Konett's comprehensive ecosystem for startups, investors, and mentors.
        </p>

        <Link className='w-fit m-auto' href={"/sign-up"}>
                <div className='p-3 px-5 rounded-full cs text-md bg-c1 text-white  flex items-center gap-2'>
                    Get Started
                    <RiArrowRightLine className='font-bold' fontWeight={900} />
                </div>
            </Link>
    </div>
  )
}

export default Hero