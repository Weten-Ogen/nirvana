"use client"
import { NewsArticle } from '@/models/NewsArticle'
import React from 'react'



export default async function Categories({params}:any) {
    const response = await fetch(` https://newsapi.org/v2/top-headlines?country=us?category=${category}&apiKey=${process.env.Api_key}`,{
        next:{
            revalidate:20
        }
    })
    const newArticles = await response.json()
   

  return (
    <div>
        {params.category}
    </div>
  )
}
