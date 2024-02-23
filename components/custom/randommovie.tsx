import React from 'react';
import ImageBg from './imagebg';
import Image from 'next/image';
import { randomrequest } from '@/lib/request';
import { cn } from '@/lib/utils';

interface imageprops{
    children?:React.ReactElement,
    className?:string,
}
export default async function RandomMovie({children,className}:imageprops) {
    const movie = await randomrequest();

  return (
    <ImageBg className="">
        <>
            <Image 
            className={cn("object-cover",className)}
            width={500}
            height={600}
            alt={movie.original_title}
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}}`}/>
            {children}         
        </>
      </ImageBg>
  );
}
