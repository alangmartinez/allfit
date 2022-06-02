import { createContext, useState } from "react";
import { getProducts, products } from "../asyncmock";

export const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {


    const addFavorite = (id) => {
        getProducts(id)
            .then((product) => setProduct(product))
    }
    return(
        <FavoriteContext.Provider>
            { children }
        </FavoriteContext.Provider>
    )
}