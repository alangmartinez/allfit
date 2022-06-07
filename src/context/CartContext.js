import { stringify } from "@firebase/util";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  let [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", stringify(cart));
  }, [cart]);

  // Function to add a product to the cart.
  const addProduct = (productToAdd) => {
    // Check if the product is already in the cart.
    const isInCart = cart.some((product) => product.id === productToAdd.id);

    if (isInCart) {
      setCart(
        cart.map((product) => {
          return product.id === productToAdd.id
            ? { ...product, quantity: product.quantity + productToAdd.quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, productToAdd]);
    }
  };

  // Function to remove a product from the cart.
  const removeProduct = (id) => {
    const filteredCart = cart.filter((product) => product.id !== id);
    setCart(filteredCart);
    saveInLS("cart", cart);
  };

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

  const cleanCart =  () => {
    setCart([]);
  }

  const getTotal =  () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    return total
  }

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, addProduct, getQuantity, removeProduct, saveInLS, getTotal, cleanCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
