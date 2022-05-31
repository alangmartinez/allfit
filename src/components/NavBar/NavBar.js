import "./navBar.css";
import SearchInput from "../SearchInput/SearchInput";
import Menu from "../Menu/Menu";
import CartWidget from "../CartWidget/CartWidget";
import SearchProvider from "../../context/SearchContext";

export default function navBar() {

  return (
    <>
      <nav className="nav-bar position-fixed d-flex px-4">
        <Menu />
        <SearchProvider>
          <SearchInput></SearchInput>
        </SearchProvider>
        <CartWidget></CartWidget>
      </nav>
    </>
  );
}