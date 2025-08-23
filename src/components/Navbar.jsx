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
          <img src={logo} width={44} height={44} className='cursor-pointer'/>
          <p>Doctor's <span className='text-green-600'>Point</span></p>
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
          
          
          </div>) : (<button onClick={() => navigate('/login')} className='bg-cyan-600 active:bg-cyan-500  hover:scale-105 transition-all text-white px-6 py-2.5 rounded-full font-light hidden md:block'>Create Account</button>)}
          </div>
    </div>
  )
}

export default Navbar