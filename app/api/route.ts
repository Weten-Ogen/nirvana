import { NextRequest,NextResponse } from "next/server";
import axios from "axios";



export async function GET(req:NextRequest,{params}:any){
    const query = req.nextUrl.searchParams.get('q')
    const url=`https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=653af5b4e1eb40e4930409758a9ae01e`

    const response = await axios.get(url)
    const data =await response.data
    return NextResponse.json(data)
}