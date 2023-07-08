"use client"
import LoadButton from "./LoadButton";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import NewsGrid from "../layouts/NewsGrid";
import { NewsArticle } from "@/types/interfaces";
import { Loader } from "lucide-react";
import axios from 'axios';


export default function SearchForm() {

  const [searchResult, setSearchResult] = useState<NewsArticle[] | []>()
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState<any>()
  
   async function handleSubmit(e:FormEvent<HTMLFormElement>)
    {

    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const searchQuery= formData.get("search")?.toString().trim();

    if(searchQuery){
      try {

        setLoading(true)
        const res = await axios.get(`/api?q=${searchQuery}`)
        const data = await res.data
        setSearchResult(data.articles)
        setLoading(false)

      } catch(error) {

        setError(error)

      }
    }
    return 1
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="px-8 gap-4 flex items-center justify-center ">
        <Input
        name="search"
        id="search" 
        className="bg-white"
        type="text" 
        placeholder="search for news. e.g sports, enterntainment, politics , e.t.c ... "
        />
        {
          loading ? 
          <LoadButton/>: 
        <Button 
        type="submit"
        className="px-4 ">
          search
        </Button>

        }
     
      
    
      </form>
      {!loading ? <div className="mt-10">
        {searchResult ?
        <NewsGrid articles={searchResult}/>: 
        <p className="flex items-center text-center justify-center text-2xl text-slate-400 ">
          No Results Found ...
        </p>
        }
      </div>:
      <div className="mt-23"> 
       <Loader size={50} className="flex items-center justify-center animate-spin mx-auto"/>
      </div>}
    </div>
  )
}
