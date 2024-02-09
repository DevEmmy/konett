"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiArrowRightFill, RiArrowRightLine } from "react-icons/ri"

const Nav = () => {

    const [active, setActive] = useState(0)

    const nav = [
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Pricing",
            link: "/pricing"
        },
        {
            title: "Contact",
            link: "/contact"
        }
    ]
  return (
    <div className='grid grid-cols-[1fr_1fr_1fr] md:flex items-center py-5 px-[5.7%] justify-between'>
        <Link href={"/"} className='flex gap-2 items-center'>
            <Image src="/./logo.png" alt="" width={0} height={0} className='w-[50px] h-[50px]' unoptimized/>
            <h2 className='text-mdl text-c1 font-bold'>Konett</h2>
        </Link>

        <div className="flex justify-evenly md:hidden">
            {
                nav.map((n, i)=> {
                    return (
                        <Link href={n.link} key={i} className={`${active == i && "text-c1 font-medium"} hover:text-c2 transition-all`}>
                            {n.title}
                        </Link>
                    )
                })
            }
        </div>


        <div className='flex items-center gap-5 justify-end md:hidden'>
            <Link className='' href={"/login"}>
                Login
            </Link>

            <Link className='' href={"/sign-up"}>
                <div className='p-3 px-5 rounded-3xl bg-c1 text-white text-sm flex items-center gap-2'>
                    Get Started
                    <RiArrowRightLine className='font-bold' fontWeight={900} />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Nav