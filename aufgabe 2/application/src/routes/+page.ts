import {cats} from "./cats"

export function load({url}){
    const pageParam = parseInt(url.searchParams.get('page') || '1')

    const pageSizeParam = parseInt(url.searchParams.get('pageSize') || '5');

    let maxPages = Math.ceil(cats.length / pageSizeParam)

    let catsSliced = cats.slice((pageParam * pageSizeParam) - pageSizeParam, pageParam * pageSizeParam)

    const searchParam = url.searchParams.get('search') || ""

    if(searchParam){
        catsSliced = catsSliced.filter(cat => cat.alt.toLowerCase().includes(searchParam.toLowerCase()) || cat.picturedCats.toString().toLowerCase().includes(searchParam.toLowerCase()))
        maxPages = Math.ceil(catsSliced.length / pageSizeParam)
    }

    return {
        cats: catsSliced,
        page: pageParam,
        maxPages: maxPages,
        pageSize: pageSizeParam,
        search: searchParam
    }
}
