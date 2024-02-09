import React from 'react'
import { RiBookMarkFill, RiVipCrown2Line } from 'react-icons/ri';

const Features = () => {
    const features = [
        {
          title: "Matchmaking",
          text: "Discover relevant connections and partnership opportunities tailored to your interests and goals."
        },
        {
          title: "Resource Hub",
          text: "Access a wealth of resources, including guides, templates, and tools, to support your entrepreneurial journey."
        },
        {
          title: "Event Calendar",
          text: "Stay informed about upcoming events, workshops, and networking opportunities in the innovation community."
        },
        {
          title: "Expert Mentorship",
          text: "Gain valuable insights and guidance from experienced mentors to accelerate your startup's growth."
        },
        {
          title: "Funding Opportunities",
          text: "Explore funding options and connect with investors interested in supporting innovative ventures."
        }
      ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-none px-[5.7%] gap-10 items-center'>
        <div className='flex flex-col gap-5'>
            <h2 className='text-mdl font-semibold text-c1'>Key Features:</h2>

            <div className="flex flex-col gap-5">
                {
                    features.map((f, i)=>{
                        return(
                            <div key={i} className='flex flex-row items-start gap-3'>
                                <div className='bg-c1 text-white rounded-xl p-3 flex items-center justify-center'><RiVipCrown2Line size={20}/></div>
                                <div>
                                    <h2 className='text-md text-c1 font-medium'>{f.title}</h2>
                                    <p className='text-sh2'>{f.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <img src="https://nairametrics.com/wp-content/uploads/2021/10/Work-team.png" alt="" className='rounded-3xl shadow-2xl'/>
    </div>
  )
}

export default Features