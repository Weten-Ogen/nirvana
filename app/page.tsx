import NewsGrid from "@/components/common/NewsGrid"
import { NewsResponse } from "@/models/NewsArticle"
import axios from 'axios'

export  default async function Home() {

  const url= await `https://newsapi.org/v2/top-headlines?country=us&apikey=${process.env.Api_key}`
  
  const response:NewsResponse = await axios.get(url).then(response => response.data.articles)
  
 

  return (
    <main className="">
     <h1 
     className=" font-bold text-red-600  capitalize text-3xl  tracking-wide ">
      breaking news
      </h1>
     <NewsGrid articles={response}/>
     </main>
  )
}
