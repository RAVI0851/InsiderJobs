import React, { useContext, useRef } from 'react'

import { assets } from '../assets/assets';
import { AppContext } from '../Context/AppContext';

const Hero = () => {
  const { setsearchFilter, setisSearched }= useContext(AppContext);

  const titleref = useRef(null);
  const locationref = useRef(null);
  
  const onSearch = () =>{
    setsearchFilter({
      title:titleref.current.value,
      location:locationref.current.value
    });
    setisSearched(true)
    console.log(
      {
        title:titleref.current.value,
      location:locationref.current.value
    }
    );
    

  }

  return (
    <div>
      <div className='bg-gradient-to-r from-[#4F0487] to-[#130121] md:mx-14 max-sm:ml-8 mt-8 rounded-md p-2 py-10'>
        <div className=''>
          <h2 className='md:text-2xl  text-xl font-bold text-white mb-2 flex items-center justify-center'>Over 10,000+ jobs to apply</h2>
          <p className='text-white text-md md:text-xl flex items-center justify-center mb-6'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
        </div>
        <div className='md:flex justify-between mx-auto p-2 md:p-1 items-center bg-white text-black mt-4 gap-1 rounded md:w-1/2 ' >
          <div className='flex border gap-2 m-2'>
            <img src={assets.search_icon} alt="search" />
            <input className='w-full p-2 ' type="text" placeholder=' Search for jobs' ref={titleref} />
          </div>
          <div className='border flex gap-2 m-2'>
            <img src={assets.location_icon} alt=" Location" />
            <input type="text" placeholder='location' ref={locationref} className=' w-full p-2' />
          </div>
          <button disabled={!titleref}  onClick={onSearch} className='bg-blue-600 rounded ml-[2rem] md:ml-0 p-2 items-center text-white px-2'>Search</button>
        </div>
      </div>
      <div className='flex justify-center gap-10 items-center shadow-md border max-sm:ml-8 p-4 flex-wrap md:mx-14 mt-8'>
        <p className='ml-10'>Trusted by</p>
        <img className='h-6' src={assets.microsoft_logo} alt="microsoft" />
        <img className='h-6' src={assets.walmart_logo} alt="walmart" />
        <img className='h-6' src={assets.accenture_logo} alt="accenture" />
        <img className='h-6' src={assets.adobe_logo} alt="adobe" />
        <img className='h-6' src={assets.amazon_logo} alt="amazon" />
        <img className='h-6' src={assets.samsung_logo} alt="samsung" />
      </div>
    </div>
  )
}

export default Hero