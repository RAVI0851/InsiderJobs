import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className=' max-w-full md:mx-[6rem] md:mt-[10rem] md:h-[20rem] flex items-center justify-center p-4 max-lg:ml-10 bg-gradient-to-r from-violet-300 to-violet-100'>
        <div>
            <h1 className='text-xl mb-4'>Download Mobile App For Better Experience</h1>
            <div className='flex gap-2'>
                <a href=''>
                    <img className='h-[2rem]' src={assets.play_store} alt="playstore" />
                </a>
                <a href=''>
                    <img className='h-[2rem]' src={assets.app_store} alt="appstore" />
                </a>
            </div>
        </div>
        <div className='max-lg:hidden h-[15rem] w-[15rem]'>
            <img src={assets.app_main_img} alt="main-img" />
        </div>
    </div>
  )
}

export default AppDownload