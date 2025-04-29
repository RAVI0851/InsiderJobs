import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../Context/AppContext';

const Pagination = () => {

    const {jobs,isSearched,pageNo,setPageNo} = useContext(AppContext);
    


  return (
    jobs.length>0 && (
    <div className='flex gap-2 justify-center items-center mt-10'>
        <a href="" onClick={(e)=>{e.preventDefault();if(pageNo>1) setPageNo(pageNo-1);}}>
            <img src={assets.left_arrow_icon} alt="left_icon" />
        </a>
        {
            Array.from({length:Math.ceil(jobs.length/6)}).map((_,index)=>(
                <a href="" className=' ' onClick={(e)=>{e.preventDefault();setPageNo(index+1);}}>
                    <button className={`border ml-2 mr-2 px-3 py-3 h-10 w-10 rounded flex items-center justify-center ${pageNo===index+1 ? 'bg-blue-700 text-white' : 'bg-gray-50 text-black'}`}>{index+1}</button>
                </a>
            ))
        }
        <a href="" onClick={(e)=>{e.preventDefault(); if(pageNo<4) setPageNo(pageNo+1);}} >
            <img src={assets.right_arrow_icon} alt="left_icon" />
        </a>
    </div>
    )
  )
}

export default Pagination