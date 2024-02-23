import { cn } from '@/lib/utils';
import React from 'react';

interface imagebgprops {
    children:React.ReactElement,
    className?:string,

}
export default  async function ImageBg({children,className,...props}:imagebgprops) {
   
    return (
    <div {...props}  className={cn('',className)}>
        {children}
    </div>
  );
}
