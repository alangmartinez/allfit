import "./navBar.css";
import SearchInput from "../SearchInput/SearchInput";
import Menu from "../Menu/Menu";
import CartWidget from "../CartWidget/CartWidget";

export default function navBar() {
  return (
    <>
      <nav className="nav-bar position-fixed d-flex px-4">
        <Menu />
        <SearchInput></SearchInput>
        <CartWidget></CartWidget>
      </nav>
    </>
  );
}
