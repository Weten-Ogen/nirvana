"use client"
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "../ui/card";
import { NewsArticle } from "@/types/NewsArticle";
import Link from "next/link";




export default function NewsCard({author,title,content,description,url,urlToImage}:NewsArticle) {
 
  return (
 
    <Card className="w-400 h-700 shadow-md 
    cursor-pointer duration-300 ease-in hover:-translate-y-0.5 transform">
      <Link 
      target="_blank"
      href={url}>
      <CardHeader>
        <CardTitle>
        {title}
        </CardTitle>
        <CardDescription>
        {description?.slice(0,100).concat(" ...")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        
        <img
        src={urlToImage||"/fallback.jpg"}
        className="w-full h-[200px] object-cover"
        alt="url"/>
        


      </CardContent>
      </Link>
    </Card>
   
  )
}
