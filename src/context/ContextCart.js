import { createContext, useState } from "react";


const CustomContext = createContext();

export const CustomContextProvider = ({ childrens }) => {
    let [cart, setCart] = useState([]);

    // Function to add a product to the cart.
    const addProduct = (productToAdd) => { 
        if(isAlreadyInCart(productToAdd.id)){
            setCart([...cart, {productToAdd, quantity: quantity}])
        } else {
            setCart([...cart, productToAdd]);
        }
    }

    // Function to remove a product from the cart.
    const removeProduct = (productToRemove) => {
        const filteredCart = cart.filter((product) => product.id !== productToRemove.id)
        setCart(filteredCart);
    }

    // Check if the product is already in the cart.
    const isAlreadyInCart = (id) => {
        cart.find((product) => product.id === id )
    }

    // Function to get the quantity of products in the cart.
    const getQuantity = () => {
        let count = 0;
        cart.forEach((product) => {
            count += product.quantity
        } )
        return count;
    }


    return(
        <>
            <CustomContext.Provider value={{ cart, addProduct, getQuantity, removeProduct }}>
                { childrens }
            </CustomContext.Provider>
        </>
    );
}

export default CustomContext;