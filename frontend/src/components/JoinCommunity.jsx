import React from 'react'

const JoinCommunity = () => {
    const reasons = [
        {
            text: "Connect with like-minded individuals and organizations to drive innovation forward.",
            img: "./connect.svg"
        },
        {
            text: "Access resources, find funding opportunities, and unlock growth potential.",
            img: "./resources.svg"
        }
    ]
  return (
    <div className='flex flex-col gap-10 items-center justify-end px-[5.7%]'>
        <h2 className='text-mdl font-semibold text-c1'>Join Community</h2>
        
        <div className="flex items-center gap-10 md:flex-col">
            {
                reasons.map((r, i)=>{
                    return (
                        <div className='flex flex-col justify-center items-center gap-5 w-[40%] md:w-full m-auto rounded-3xl shadow-2xl p-10'>
                            <img src={r.img} alt="" className='w-[50%] h-[200px] object-contain'/>
                            <p className='text-black text-md text-center'>{r.text}</p>
                        </div>
                    )
                })
            }
        </div>

        
    </div>
  )
}

export default JoinCommunity