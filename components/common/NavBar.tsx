import React from 'react';
import Link from 'next/link';
import DropButton from './DropButton';

export default function NavBar() {
  return (
    <div className='fixed inset-0 bg-black h-12 text-white z-30'>
    <ul className='flex items-center gap-4 sm:gap-8  px-4 '>
        <li className='t text-lg py-2 sm:tracking-widest capitalize'>
            <Link href="/">
                breaking
            </Link>
        </li>
        <li className=' text-lg py-2 sm:tracking-widest capitalize'>
            <Link href="search">
                search
            </Link>
        </li>
        <li className='text-white text-lg py-2  '>
                <DropButton/>
        </li>
    </ul>
    </div>
  );
}
