import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="px-4 mt-5">
      <div className="flex gap-6 fixed bg-black h-12 inset-0">
        <Skeleton 
        className="px-10 py-4 bg-gray-400 rounded "/>
        <Skeleton 
        className="px-10 py-4 bg-gray-400 rounded "/>
        <Skeleton 
        className="px-10 py-4 bg-gray-400 rounded "/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <Skeleton className="px-12 py-2"/>
        <div className=   "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 px-4 sm:px-4 ">

        </div>
      </div>

    </div>
  )
}
