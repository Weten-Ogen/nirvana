import {  NewsArticle } from "@/models/NewsArticle";
import NewsCard from "./NewsCard";
interface NewsGridProps {
  articles : NewsArticle[]
}

export default  function NewsGrid({articles}:NewsGridProps) {
    
  
  return (
    <div className="mt-10 mx-auto sm:mx-0 grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 items-start  gap-6 px-4 sm:px-0">
       <>
       {articles.map(data => 
        <NewsCard key={data.title} {...data}/>)}
       </> 
    </div>
  );
}
