"use client"
import { Button } from "@/components/ui/button"

interface errorProps  {
    error:Error,
    reset: () => void;
}

const error = ({error,reset}:errorProps) => {
    return ( 
        <div className="ease-in duration-300 h-screen z-[20] absolute inset-0 md:h-[400px]  bg-gray-600">
            <div className="relative inset-0 flex flex-col items-center  space-y-2">
            <h1 className="text-3xl md:text-5xl text-red-600 font-bold tracking-wider">{error.name}
            </h1>
            <p className=" text-xl md:text-3xl text-white">{error.message}
            </p>
            <p className="text-xl text-slate-400">{error.stack }
            </p>
            
            <Button className="hover:opacity-65 hover:text-white hover:bg-red-500 bg-red-600 uppercase tracking-wider" onClick={reset}>
                try again
            </Button>
            </div>
        </div>
   
    )
}
 
export default error;