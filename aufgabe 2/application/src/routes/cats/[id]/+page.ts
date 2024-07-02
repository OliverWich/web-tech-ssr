import {cats} from "../../cats";

export function load({ params }){
    const id = parseInt(params.id);
    return cats.find(cat => cat.id === id);
}
