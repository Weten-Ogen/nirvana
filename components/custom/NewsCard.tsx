import { Suspense } from "react";
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle ,
    CardFooter} 
    from "../ui/card"
import Image from "next/image"
import { AspectRatio } from "../ui/aspect-ratio";
import { NewsArticle } from "@/types/interfaces";
import fallbackImg from "@/public/fallbac.png";
import { Button } from "../ui/button";
import CardSkeleton from "./CardSkeleton";
import { Skeleton } from "../ui/skeleton";
export default function NewsCard({title,url,author,urlToImage,description}:NewsArticle) {

    // dynamic styles for author names
    const authorStyles = author  ? "text-blue-400 font-bold tracking-wider text-xl capitalize": "text-red-400 font-bold tracking-wider text-xl capitalize ";
    const imgurl = urlToImage as string ;

    // slicing the length of description
    const descript = description?.length > 100 ? description?.slice(0,100) : description;

    let authoree = author && Array(author.split(","))
    const authorlist = authoree && authoree.length > 3? authoree.slice(0,2) : authoree;

  return (
    <div className="hover:-translate-y-1 hover:ease-in duration-300 my-2">
       

        <Card className="shadow-xl  object-contain ">
            <CardHeader>
            <CardTitle>
                <Suspense fallback={<CardSkeleton/>}>
                    {title}
                </Suspense>
            </CardTitle>
            <CardDescription className="my-2">
                {descript ? descript + "...": "No description here, go  to the official site to see more ..."}
                <Button>more</Button>
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <AspectRatio  ratio={16/ 9} className="bg-muted">
                    <Suspense fallback={
                    <Skeleton className="animate-pulse">
                        Loading ...
                        </Skeleton>}>
                    <Image 
                    src={imgurl? imgurl : fallbackImg} 
                    alt={title}
                    fill
                    className="object-cover w-full  "
                    />
                    </Suspense>
                </AspectRatio>
            </CardContent>
           <CardFooter className="flex flex-col gap-2">
           <h2 className="text-xl">Author :
            <span className={authorStyles}> {authorlist ? author : "unknown"}</span>
            </h2>
           </CardFooter>
        </Card>
    </div>
  )
}
