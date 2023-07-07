import { NewsArticle, NewsGridProp } from "@/types/interfaces"
import NewsCard from "../custom/NewsCard"

export default function NewsGrid({articles}:NewsGridProp) {
    const styleprops = articles ? "grid grid-cols-1 md:grid-cols-3 items-start  sm:gap-8 p-8  ": "flex items-center justify-center text-center text-4xl uppercase font-bold p-16 tracking-wide";

  
    return (
    <div className={styleprops}>
      {articles && articles.map( (item:NewsArticle,i:number) => {
            return <NewsCard key={i} {...item}/>
      })}
    </div>
  )
}
