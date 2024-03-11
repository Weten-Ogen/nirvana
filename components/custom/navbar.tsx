import React from 'react';
import NavLink from './navlink';
import SignX from './signx';
import SignOutBtn from './signout';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import AvaTar from './avaatar';


export default async function NavBar() {
    const session
     = await getServerSession(authOptions);

     return (
    <section 
    className="flex items-center justify-between px-1 py-2 md:px-8 md:py-4  z-[23px] ">
        {/* logo */}
        <div className=" tracking-wide md:tracking-wider uppercase font-bold">
            <NavLink 
            className='text-lg text-red-600'
            name="/"
            >
                nirvana
            </NavLink>
        </div>

        {/* navlinks */}
        <div className='hidden lg:flex gap-2 capitalize tracing-wide text-lg '>
            <NavLink 
            name='/' 
            className='navlinks'>
                home
            </NavLink>
            <NavLink 
            name='/movies' 
            className='navlinks'>
                movies 
            </NavLink>
            <NavLink 
            name='/settings' 
            className='navlinks'>
                settings
            </NavLink>
        </div>

        {/* authentication */}
        <div className='m-1 '>
            {session ? 
            <div className="flex items-center gap-2 flex-row-reverse">

           <AvaTar
             imageurl={session?.user?.image}
            />
            <SignOutBtn
            className=' p-2 text-lg tracking-wider whitespace-normal font-bold '
            >
            log out
            </SignOutBtn>
            </div>
            :

            <SignX    
            className='text-lg whitespace-normal text-red-500 hover:text-red-600 opacity-40 hover:opacity-90' 
            >log in with google
            </SignX>
        }
                       
        </div>
    </section>
  );
}
