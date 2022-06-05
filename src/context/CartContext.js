import { stringify } from "@firebase/util";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  let [cart, setCart] = useState( () => {
    try {
     return JSON.parse(localStorage.getItem("cart")) || []
    } catch (e) {
      return []
    }
  }
  );

  useEffect(()=> {
    localStorage.setItem('cart', stringify(cart))
  }, [cart])

  // Function to add a product to the cart.
  const addProduct = (productToAdd) => {
    if (isInCart(productToAdd.id)) {
      const newCart = cart.map((product) =>
        product.id === productToAdd.id
          ? { ...product, quantity: product.quantity + productToAdd.quantity }
          : product
      );
      setCart(newCart);
    } else {
      setCart([...cart, productToAdd]);
    }
  };

  // Function to remove a product from the cart.
  const removeProduct = (id) => {
    const filteredCart = cart.filter((product) => product.id !== id);
    setCart(filteredCart);
    saveInLS('cart', cart);
  };

  // Check if the product is already in the cart.
  const isInCart = (id) => cart.find((product) => product.id === id);

  // Function to get the quantity of products in the cart.
  const getQuantity = () => {
    let count = 0;
    cart.forEach((product) => {
      count += product.quantity;
    });
    return count;
  };

  // Save cart in Local Storage
  const saveInLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Updating the price in the cart after add a repetead product 
  const updatePrice = () => {
    
  }


  // Update the stock after have been added to cart
  const getProductQuantity = (id) => {
    return cart.find((product) => product.id === id)?.quantity
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, addProduct, getQuantity, removeProduct, saveInLS }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
