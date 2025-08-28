import React from 'react'
import {DoctorInfo } from '../assets/assets.js'

const TopDoctor = () => {
  return (
    <div>
        <h1>Top Doctors to Book</h1> 
        <p>Simply browse through our extensive list of trusted doctors.</p>
        
            {DoctorInfo.map((data, index) =>(
             <div key={index} className=''>
            <div className='bg-cyan-500'>
                 <img src={data.image} className='w-55'/>
                 <p>{data.active}</p>
                <p>{data.name}</p>
                <p>{data.speciality}</p>
            </div>
             </div>
            ))}
        
    </div>
  )
}

export default TopDoctor