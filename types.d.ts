interface companies {
    id:number,
    logo_path:string | null,
    name:string,
    origin_country:string
}

interface countries {
    iso_3166_1:string,
    name:string,
}
interface languages {
    english_name:string,
    iso_366_1:string,
    name:string,
}
interface genres {
    id:number,
    name:string,
}