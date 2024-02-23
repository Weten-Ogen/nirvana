import RandomMovie from '@/components/custom/randommovie';
import Row from '@/components/custom/row';
import { randomrequest, requests } from '@/lib/request';
import Image from 'next/image';
import React from 'react';

export default async function Movies() {
  const movie = await randomrequest()
    return (
    <section className='flex flex-col gap-4'>
        <div className="h-[55vh]">
            <div
            className='bg-black/70 absolute object-cover inset-0 w-full h-[65vh] z-[-10]'
            />
            <Image 
                className='bg-black/90  z-[-11] absolute object-cover inset-0 w-full h-[65vh] '
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={500}
            />
            <div className='flex flex-col   md:justify-center text-wrap items-center my-5 gap-2 p-2'>
                <p className="text-2xl text-white font-bold tracking-wider ">
                {movie.title}
                </p>
                <p className='max-w-lg text-white text-lg tracking-wider md:text-justify font-semibold line-clamp-4 '>
                    {movie.overview} 
                </p>
                <div className='flex items-baseline text-slate-300 gap-2  tracking-wider '>
                    <div className="tracking-wide text-sm capitalize font-bold">released date :</div>
                    <div className='text-sm'>
                    {movie.release_date}
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col '>
            {/* rows */}
            <Row 
            rowId='1'
            title='popular'
            fetchurl={requests.requestPopular}
            />
            <Row 
            rowId='2'
             title='top rated'
            fetchurl={requests.requestTopRated}
            />
            <Row 
            rowId='3'
            title='horror'
            fetchurl={requests.requestHorror}
            />
          
        </div>
    </section>
  );
}
