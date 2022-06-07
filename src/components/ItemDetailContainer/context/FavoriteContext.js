import { createContext, useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
    const { cart, setCart } = useContext(CartContext);

    const addFavorite = (id) => {
        const newFavorite = cart.find((p) => p.id === id);
        
        setCart(()=> {
            if(newFavorite) {
                setCart( () => {
                    cart.map( (product) => {
                        return product.id === id 
                            ? {...product, favorite: true} 
                            : product; 
                    })
                })
            } else {
                setCart(cart);
            }
        })
    }

    return(
        <FavoriteContext.Provider value = {{ addFavorite }}>
            { children }
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider;