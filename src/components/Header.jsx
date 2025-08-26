import React from 'react'
import header from "../assets/header.png"
import doctor3 from "../assets/doctor3.png"

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-sky-100 rounded-lg px-6 md:px-10 lg:px-20'>

      {/* ----------Left side----------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw] md:mb-[-30px]'>
    
        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight '>Book <span className='text-sky-500'>Appoinment</span> <br/> With Trusted Doctors</p>

        <div className=' flex items-center text-sm font-light'>
         <img src={doctor3} className='w-20'/>
          <p>Simply browse through our extensive list of trusted doctors, <br/> schedule
          your appoinment hassle-free</p>
        </div>
       <div>
        <a href="#speciality" className='flex items-center bg-sky-800 py-3 text-white px-8 rounded-full text-sm m-auto hover:scale-105 transition-all duration-300'>Book appoinment</a>
       </div>
      </div>
      {/* -----------Right side--------- */}
      <div className='md: w-1/2 relative'>
        <img src={header}  alt="Image"  className='md:absolute  md:h-[550px] rounded-lg'/>
      </div>

    </div>
  )
}

export default Header