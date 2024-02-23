'use client'
import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';

interface signprops{
    className: string,
    children:string
}
export default function SignOutBtn({children,className}:signprops) {
  return (
    <Button
    variant={'destructive'}
    onClick={() => signOut()} 
    className={cn('',className)}
    >
    {children}
    </Button>
  );
}
