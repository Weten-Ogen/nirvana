"use client"

import React, { FormEvent, useDeferredValue, useState } from 'react'
import { Input } from '../ui/input'
import useSWR  from 'swr';
;
const fetcher = (url:string) => fetch(url).then(res => res.json())
const url  = ``
export default async function NewsForm() {
 
  return (
    <div className='p-8 flex items-center gap-4'>
       
    </div>
  )
}
