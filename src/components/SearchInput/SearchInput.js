import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./searchInput.css";

export default function SearchInput() {
  const { products, handleSearch } = useContext(SearchContext);

  const handleOnKeyUpSearch = (e) => {
      handleSearch(e.target.value);
      console.log(products);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="search-input form-control col-md"
          name="search"
          id="search-input"
          placeholder="Search..."
          onKeyUp={handleOnKeyUpSearch}
        />
      </div>
    </>
  );
}
