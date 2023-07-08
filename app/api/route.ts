import { NextRequest,NextResponse } from "next/server";
import axios from "axios";



export async function GET(req:NextRequest,{params}:any){
    const query = req.nextUrl.searchParams.get('q')
    const apiKey=await process.env.API_KEY as string
    const url=`https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${apiKey}`

    const response = await axios.get(url)
    const data =await response.data
    return NextResponse.json(data)
}