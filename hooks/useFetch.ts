"use client"

import { useEffect ,useState,useCallback} from "react";
import axios from "axios";

export default function useFetch(query:string) {
    const[data,setData] = useState()
    const[loading,setLoading]=useState(false)  
    const [error,setError] = useState<any>()

    async function getData(){
        setLoading(true)
        const res = await axios.get('/api?q=' + query)
        const data = await res.data
        setData(data.articles)
        setLoading(false)

    }
    useEffect(() =>{ getData()},[])
    return {loading,data,error}
}
