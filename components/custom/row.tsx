"use client"
import { fetchRequested, movieProps } from '@/lib/request';
import React, { Suspense } from 'react';
import RowItem from './rowitem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface rowProps{
    title: string,
    fetchurl: string,
    rowId: string
}
export default  function Row({title,fetchurl,rowId}:rowProps) {
    const [data, setData] = React.useState<[] |movieProps[]>([]);
    const [loading, setLoading] = React.useState(false);
    

    const fetchdata = async() => {
        setLoading(prev => !prev);
        const mock = await fetchRequested(fetchurl)
        setLoading(prev=>!prev);
        setData(prev => mock)
    };

    React.useEffect(() => {
        fetchdata()
    },[]);

    const slideLeft = () => {
        var slider:HTMLElement |null  = document.querySelector('#slider' + rowId);
        if(slider) {
            slider.scrollLeft = slider.scrollLeft - 500;
        }
       

    }
    const slideRight = () => {
        var slider:HTMLElement |null  = document.querySelector('#slider' + rowId);
        if(slider) {
            slider.scrollLeft = slider.scrollLeft + 500;
        }
    }
    

  return (
    <>
    <h2 className='text-red-600 text-center whitespace-normal tracking-widest capitalize  font-bold md:text-xl p-4'>
        {title}
    </h2>
            <div className='relative flex items-center gap-4'>
            <ChevronLeft
            onClick={slideLeft }
                className="z-10 bg-white rounded-full absolute opacity-50 hover:opacity-100 left-0 cursor-pointer "
                size={40}
            />
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
                    {data.map((item:movieProps)=> {
                        return (<RowItem
                            className=''
                            props={item} 
                        key={item.id}
                        />)
                    })}
                </div>
            <ChevronRight
            onClick={slideRight}
            className="z-10 bg-white rounded-full absolute opacity-50 hover:opacity-100 right-0 cursor-pointer "
           
            size={40}
            />
            </div>
    </>
  )
}
