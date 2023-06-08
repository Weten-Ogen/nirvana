import { NewsResponse } from "@/models/NewsArticle";
import { NextRequest, NextResponse } from "next/server";

export const  GET = async(res:NextRequest,{params}:any)  => {
const searchQuery = res.nextUrl.searchParams.get("q");
if (!searchQuery){
    return NextResponse.json({error:"input a valid query"})
}
    const response = await fetch(` https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.Api_key}`)
    const newResponse:NewsResponse = await response.json()
    
    return NextResponse.json(newResponse.articles)
}
  