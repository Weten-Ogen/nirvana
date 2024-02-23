"use client"
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface avatprops{
    className?: string,
    imageurl:string | null |undefined
}
export default function AvaTar({className,imageurl}:avatprops) {
  if(imageurl){return (
    <Avatar>
        <AvatarImage 
        src={imageurl} 
        alt={`${imageurl}`}
        />
    </Avatar>
  );}
}
