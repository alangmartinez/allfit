import { createContext, useState } from "react";
import { getProducts } from "../asyncmock";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleSearch = (value) => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(`Ups!, we have an error please send us the below error: ${err}`));

      const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(value));
      setProducts(filteredProducts);
  };

  return (
    <SearchContext.Provider value={{ products ,handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
