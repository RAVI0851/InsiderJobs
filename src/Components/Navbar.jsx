import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const {openSignIn} = useClerk();
    const {user} = useUser();
    return (
        <div className='shadow-md py-4 mt-2 w-full flex max-sm:ml-4 flex-wrap '>
            <div className='container mx-auto flex justify-between px-4 hover:cursor-pointer'>
                <img onClick={()=>{navigate(`/`)}}  src={assets.logo} alt="logo" className='h-10 md:w-[10rem] w-20'/>
                {
                    user ? <div className='flex items-center gap-3'>
                        <Link className='hidden' to={"/applications"}>Applied jobs</Link>
                        <p className='hidden'>|</p>
                        <p className='max-lg:hidden'>Hi,{user.firstName+" "+user.lastName}</p>
                        <UserButton/>

                    </div>
                    : <div className='flex justify-between  md:gap-4 '>
                    <button className='mr-4 border rounded-md p-1'>
                        Recruiter Login
                    </button>
                    <button onClick={e => openSignIn()} className='bg-blue-600 px-2 md:px-6 text-white rounded-full'>
                        Login
                    </button>
                </div>
                }
                
            </div>
        </div>

    )
}

export default Navbar