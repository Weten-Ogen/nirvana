import NewsGrid from "@/components/layouts/NewsGrid";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import axios from 'axios'

export default async function Home(){

    const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + process.env.API_KEY)
    const data =  await res.data

  return (
    <main className="">
      <Suspense fallback={<Skeleton>loading..</Skeleton>}>
        {data ? 
        <NewsGrid articles={data.articles}/>
        : <p>An error occured while fetching Data</p>}
      </Suspense>
    </main>
  )
}
