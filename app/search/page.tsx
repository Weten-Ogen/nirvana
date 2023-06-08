
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewsArticle } from "@/models/NewsArticle";
import { FormEvent } from "react";
import NewsCard from "@/components/common/NewsCard";

interface SearchProp {
  query : string,
}


export default function Search() {
  async function action(data:FormData){
    const query = data.get('query');
    
  }
  
  

  return (
    <div className="w-full mt-5">
      <form action={action}>
        <Input
        name="query"
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
       
       
      </div>
    </div>
  );
}
