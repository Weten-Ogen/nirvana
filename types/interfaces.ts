
export interface NewsArticle{
    author: string,
    title:string,
    description:string,
    url:string,
    urlToImage?:string,
    publishedAt?:string,
    content:string,
}
export interface ButtonProps{
    name:string,
    loading: boolean
}

export interface NewsGridProp{
    articles : NewsArticle[]
}
