import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
    const { cart } = useContext(CartContext);

    const addFavorite = (id) => {
        // const porductToAddFav = cart.find( (product) => product.id === id );
        // const a = {...porductToAddFav, favorite: true };
        const a = 'hola';
        console.log(a);
    }

    return(
        <FavoriteContext.Provider value={ addFavorite }>
            { children }
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider;