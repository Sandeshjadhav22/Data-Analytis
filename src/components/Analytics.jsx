import React from 'react'
import Laptop from './assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>   
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold '>DATA ANALYTS DASHBOARD</p>
            <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>Manage Data Analytcs centrally </h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa non, illo at facilis omnis nisi ab ducimus dolore quam, blanditiis eum? Maiores id ipsum facilis ipsam vel quae nam.</p>
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
