"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface navprops {
    name : string,
    children: string,
    className: string,
}

export default function NavLink({name,children, className,...props}:navprops) {
  return (
    <Link {...props} className={cn('',className)} href={name}>
        {children}
    </Link>
  );
}
