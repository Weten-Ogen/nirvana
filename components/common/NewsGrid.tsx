import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import NewsCard from "./NewsCard";
import { NextPage } from "next";

export interface NewsGridProps {
    data : NewsArticle[]
}

export default  function NewsGrid({articles}:NewsResponse) {
    
  
  return (
    <div className="mt-10 mx-auto sm:mx-0 grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 items-start  gap-6 px-4 sm:px-0">
       <>
       {articles.map(data => 
        <NewsCard key={data.title} {...data}/>)}
       </> 
    </div>
  );
}
