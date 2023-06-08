"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewsArticle } from "@/models/NewsArticle";
import { FormEvent, useState } from "react";
import NewsCard from "@/components/common/NewsCard";

export default function Search() {
  const [searchResults,setSearchResults] =useState<NewsArticle[] | null>(null);
  const [query,setQuery] = useState<string>('')
  
 const handleSubmit = async(e:FormEvent<HTMLFormElement> )=> {
    e.preventDefault();
    if(query){
    
      const response = await fetch("/api?q=" + query)
      setQuery('') 
      const articles:NewsArticle[] = await response.json()
      setSearchResults(articles)
      console.log(searchResults)
        
      
    }
  
  }

  return (
    <div className="w-full mt-5">
      <form onSubmit={handleSubmit}>
        <Input
        id="inputText"
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        placeholder="E.g. sports, business, health ..."
        className="w-full px-2 sm:max-w-lg lg:max-w-5xl my-2 bg-white
        duration-300 ease-in "
        type="text"/>
        <Button
        type="submit"
        className="px-6 py-2"
        >
            search
        </Button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start mt-14">
        {searchResults?.map((articles:NewsArticle)=> <NewsCard key={articles.title} {...articles}/>)}
      </div>
    </div>
  );
}
