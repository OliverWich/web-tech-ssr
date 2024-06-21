import {cats} from "../../cats";

export function load({ params }){
    const cat = cats.find((cat) => cat.id === parseInt(params.id));
    return {
        cat
    };
}