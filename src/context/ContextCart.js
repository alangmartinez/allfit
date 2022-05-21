import { createContext, useState } from "react";


const CustomContext = createContext();

export const CustomContextProvider = ({childrensComponents}) => {
    let [cart, setCart] = useState([]);

    // Function to remove a product from the cart.
    const removeProduct = (productToRemove) => {
       cart =  cart.filter(product => product.id !== productToRemove.id)
    }

    // Function to add a product to the cart.
    const addProduct = (productToAdd) => { 
        setCart([...cart, productToAdd]);
    }

    const getQuantity = () => {
        let count = 0;
        cart.forEach((product) => {
            count += product.quantity
        } )
        return count;
    }

    // If the product to add is already on the cart, increase the quantity.


    return(
        <>
            <CustomContext.Provider value={{ cart, addProduct, getQuantity }}>
                {childrensComponents}
            </CustomContext.Provider>
        </>
    );
}

export default CustomContext;