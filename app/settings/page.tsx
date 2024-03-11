import AvaTar from '@/components/custom/avaatar';
import RandomMovie from '@/components/custom/randommovie';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Settings() {
  const session = await getServerSession(authOptions);
  if(!session) {
    redirect('/')
  }
  return (
    <section className="flex items-center justify-center p-8">
      <RandomMovie className='absolute inset-0 z-[-2]  w-full h-[65vh] overflow-hidden'>
        <>
          <div className='w-full absolute inset-0 bg-black/90 h-[65vh] z-[-2]'/>
          <div className='text-white'>
            <div className="mx-auto text-center">
            <AvaTar
            imageurl={session?.user?.image}
            className=''
            />
            </div>
            <p className='text-lg'>
              <span className="text-lg capitalize  tracking-wider">email : </span>
              <span className="text-lg font-bold whitespace-normal">
              {session?.user?.email}
              </span>
            </p>
            <p>
            <span className="text-lg capitalize ">Name : </span>
            <span className="text-lg font-bold whitespace-normal">
              {session?.user?.name}
              </span>
            </p>
          </div>
          <div>

          </div>
        </>
      </RandomMovie> 
    </section>
  );
}
