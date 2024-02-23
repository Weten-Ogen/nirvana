const key='5a4e60da58d0bcf5f356c90335f564fb'
export const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&laguage=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
    requestUpcomming: `https://api.themoviedb.org/3/movie/upcomming?api_key=${key}&language=en-US&page=1`,

}

export interface movieProps   {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title:string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean ,
    vote_average: number,
    vote_count: number,
    overview:string,
  }



const rekwest = ['requestHorror','requestTopRated','requestPopular','requestUpcomming']

export const randomrequest = async()  => {
    const randomNum = Math.floor(Math.random() *  10)
   
    const randomMovie:movieProps[] =await fetch (requests.requestPopular).then(res => res.json()).then(res => res.results)
    return randomMovie[randomNum]
}

export const fetchRequested = async(url:string) => {
    const data = await fetch(url).then(res => res.json()).then(res => res.results);
    return data 
}