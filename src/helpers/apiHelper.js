import { renderPreloader } from "../components/Preloader";
import { DELAY } from "../constants";
import * as data  from "../data/products.json";

export const getData = async () => {
     renderPreloader(true)
    try {
         const dataResult = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, DELAY.MEDIUM);
        })

        if(dataResult?.default){
            return {products: dataResult.default.products, categories: dataResult.categories};
        }
        

    }catch(error){
        console.error(error);
        
    }finally{
        renderPreloader(false)
    }
}

export const getDelay = async() => {
     renderPreloader(true)
    try{
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, DELAY.MEDIUM);
    })

    }catch(error){
        console.log(error)
    }finally{
        renderPreloader(false)

    }
}