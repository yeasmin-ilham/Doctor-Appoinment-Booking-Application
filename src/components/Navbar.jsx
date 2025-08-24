import React, { useState } from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/ilham12.jpg"
import {NavLink, useNavigate} from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate();
  // const [showMenu , setshowMenu ] = useState(false);
  const [ token , settoken] = useState(true)
  return (
    <div className='flex flex-row justify-between items-center text-sm  py-5 mb-5 '> 
        <div className='flex items-center gap-2 text-xl italic font-bold'>
          <img onClick={() => navigate('/')} src={logo} width={42} height={42} className='cursor-pointer'/>
          <p className='cursor-pointer' onClick={() => navigate('/')}>Doctor's <span className='text-sky-500'>Point</span></p>
        </div>
        <ul className='hidden md:flex items-center gap-8 font-medium'>
          <NavLink to='/'><li className='py-1 hover:text-cyan-500 hover:scale-110 transition-all'>Home</li></NavLink>
          <NavLink to = '/doctors'><li className='py-1 hover:text-cyan-500 hover:scale-110 transition-all'>All Doctors</li></NavLink>
          <NavLink to = '/about'><li className='py-1 hover:text-cyan-500 hover:scale-110 transition-all'>About</li></NavLink >
          <NavLink to = '/contact'><li className='py-1 hover:text-cyan-500 hover:scale-110 transition-all'>Contact</li></NavLink>
        </ul>
        <div className='flex items-center gap-4'>
          {token ? (<div className='cursor-pointer group relative'>
           <img src={profile} className='w-8 rounded-full'/>
          
          <div className='absolute top-0 right-0 pt-14 text-base font-semibold text-gray-700  z-20 hidden group-hover:block'>
            <div className='min-w-45 bg-stone-100 shadow-lg rounded flex flex-col gap-1 p-4 text-sm'>
              <p onClick={() => navigate('my-profile')} className='hover:text-black hover:bg-gray-200 pl-2 py-1 transition-all rounded-md cursor-pointer'>My Profile</p> <hr className='text-gray-300'/>
              <p onClick={() => navigate('my-appointments')} className='hover:text-black  hover:bg-gray-200 pl-2 py-1 transition-all rounded-md cursor-pointer'>My Appoinment</p> <hr className='text-gray-300'/>
              <p onClick={() => settoken(false)} className='hover:text-black  hover:bg-gray-200 pl-2 py-1 transition-all rounded-md cursor-pointer' >Logout</p> <hr className='text-gray-300'/>
            </div>
          </div>
          </div>) : (<button onClick={() => navigate('/login')} className='bg-cyan-600 active:bg-cyan-500  hover:scale-105 transition-all text-white px-6 py-2.5 rounded-full font-light hidden md:block'>Create Account</button>)}
          </div>
    </div>
  )
}

export default Navbar