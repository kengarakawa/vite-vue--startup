import { defineStore  } from "pinia";

const productStore = defineStore('products' , {
    
    state: () => {
        return { 
            loadedProducts : [] , 
            recommendedProducts : [] ,
        }
    }
    
})

export default productStore 