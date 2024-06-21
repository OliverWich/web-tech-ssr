import {cats} from "./cats"

export function load({url}){
    const page = parseInt(url.searchParams.get('page') || '1')
    const pageSize = parseInt(url.searchParams.get('pageSize') || '5');
    const maxPages = Math.ceil(cats.length / pageSize)
    let catsSliced = cats.slice((page * pageSize) - pageSize, page * pageSize)

    return {
        cats: catsSliced.map((cats) => ({
            id: cats.id,
            image: cats.image,
            alt: cats.alt,
            cats: cats.picturedCats,
            date: cats.date
        }
        )),
        page,
        maxPages,
        pageSize
    }
}