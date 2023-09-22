import NewsGrid from "@/components/layouts/NewsGrid";
import axios from "axios";

export default async function CatergoryPage({params}:any) {
    try {
        const slug = params.slug

    const url=`https://newsapi.org/v2/top-headlines?country=us&category=${slug}&language=en&apiKey=653af5b4e1eb40e4930409758a9ae01e`

    const res = await axios.get(url)
    const data =await  res.data
    return(
        <div>
            <NewsGrid articles={data.articles}/>
        </div>
      );
    } catch (error) {
        throw new Error(`${error}`)
    }
    

}
