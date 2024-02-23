"use client"
import React from 'react';
import { movieProps } from '@/lib/request';
import { Card, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {Heart,HeartOff} from 'lucide-react'
import fallbackImg from '@/public/fallback.png';

interface itemprops {
    className?: string,
    props: movieProps
}


export default function RowItem({className,props}:itemprops) {
    
    const {backdrop_path,poster_path,title,} = props;
    
    const [likes,setLikes] = React.useState(false);
    
    const onLikes =() => {
        setLikes(prev => !prev)
    }
  return (
   <div className={cn("w-[160px] sm:w-[2000px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2 rounded-lg",className)}>
            <Image
            width={800}
            height={800}
            className='w-full h-auto block rounded-lg '
            src={ poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : fallbackImg}
            alt={title}
            />
            <div 
            className=" absolute top-0 left-0 w-full h-full  hover:bg-black/70 opacity-0 hover:opacity-80 rounded-lg  "
            >
                <p className='whitespace-normal  md:text-sm font-bold flex justify-center text-justify w-full h-full items-center text-white lg:text-lg p-4 rounded-full'>
                    {title}
                </p>
                <p className='bottom-7 mx-2 relative'>
                    {likes ? <Heart 
                        className="text-red-600 "
                        onClick={onLikes}
                    /> : <HeartOff
                        className="text-red-600 "    
                        onClick={onLikes}
                    />}
                </p>
            </div>

   </div>

  )
}
