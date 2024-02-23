"use client"
import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface btnProps {
    children: string,
    className?:string,
}

export default function Btn({children,className}:btnProps) {
  return (
    <Button className={cn('',className)}>
        {children}
    </Button>
  );
}
