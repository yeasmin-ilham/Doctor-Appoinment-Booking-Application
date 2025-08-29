import React from 'react'
import banner from "../assets/banner.png"
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className='flex bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        {/* ----------left side------------  */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-21 lg:pl-5'>
           <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold'>
             <p >Book Appointment</p>
            <p className='mt-1'>With 100+ Trusted Doctors</p>
           </div>
<button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='mt-8 border px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 hover:scale-105 transition-all duration-300 cursor-pointer'>Create account</button>
        </div>
        {/* ----------Right side------------  */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img src={banner} className='w-full bottom-0  right-0 absolute max-w-md'/>
        </div>
    </div>
  )
}

export default Banner