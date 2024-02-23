"use client"
import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';

interface signprops {
    children: string,
    className?:string,

}

export default function SignX({children,className,...props}:signprops) {
  return (
    <Button 
    onClick={() => signIn('google')}
    variant={'outline'}
    className={cn('',className)}
    {...props}>
        {children}
    </Button>
  );
}
