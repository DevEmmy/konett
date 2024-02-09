"use client"
import React, { useState } from 'react'

const Auth = () => {

    const [selected, setSelected] = useState(0)

    const options = [
        {
            title: "Artisan"
        },
        {
            title: "Start Up",

        },
        {
            title: "Investor"
        },
        {
            title: "Mentor"
        }
    ]
  return (
    <div className='grid grid-cols-2 gap-[50px] p-3 md:grid-cols-none'>
        <div className='bg-sh4 flex justify-center items-center rounded-md h-[100vh] flex-col p-10 md:hidden'>
            <h1 className='text-lg text-c1 font-bold'>Create Account</h1>
            <p className='text-md text-c1 text-center'>Create your account in few steps as which personality you'd be joining us as and start enjoying the commuinity</p>
        </div>

        <div className='flex items-center px-8 h-[100vh] flex-col justify-center gap-5 w-full'>
            <h2 className='text-mdl font-bold text-c1'>Sign up as:</h2>
            <div className='flex justify-between gap-5 hidden'>
                {
                    options.map((op, i)=>{
                        return(
                            <div key={i} className={`text-sm px-8 py-6  border-2 border-c1 text-c1 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all ${selected == i && "bg-[#FFF7D6] border-c2 font-bold"}`} onClick={()=> setSelected(i)}> 
                                {op.title}
                            </div>
                        )
                    })
                }
            </div>

            <form action="" className="auth">
                <input type="text" placeholder='Email Address'/>
                <input type="text" placeholder='Full Name'/>
                <input type="tel" placeholder='Phone Number'/>
                <input type="password" placeholder='Password'/>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Auth