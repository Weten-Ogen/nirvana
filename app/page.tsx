import NewsGrid from "@/components/common/NewsGrid"
import { NewsArticle, NewsResponse } from "@/models/NewsArticle"
export  default async function Home() {

  const url= await `https://newsapi.org/v2/top-headlines?country=us&apikey=${process.env.Api_key}`
  
  const response = (await fetch(url))
  const newResponse= await response.json()
  const newArticle:NewsArticle[] = await newResponse.article  

 

  return (
    <main className="">
     <h1 
     className=" font-bold text-red-600  capitalize text-3xl  tracking-wide ">
      breaking news
      </h1>
     <NewsGrid articles={newArticle}/>
     </main>
  )
}
