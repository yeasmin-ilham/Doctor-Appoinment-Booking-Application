import React from 'react'
import {specialityData} from "../assets/assets.js"
import { Link } from 'react-router-dom'

const Speciallity = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800 '>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free
        </p>
        
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-hidden'>
          {specialityData.map((data, index) => (
         <Link key={index} to={`/doctors/${data.speciality}`}
         className='flex flex-col items-center text-xs cursor-pointer shrink hover:translate-y-[-10px] transition-all'>

        <img src={data.image} alt='' className='w-16 sm:w-24 mb-2'/>
       <p>{data.speciality}</p>

       </Link>
          ))}
        </div>
    </div>
  )
}

console.log(specialityData)

export default Speciallity