import "./navBar.css";
import SearchInput from "../SearchInput/SearchInput";
import Login from "../Login/Login";
import Menu from "../Menu/Menu";
import { products } from "../../asyncmock";

export default function navBar() {

  const handleSearch = (e)=>{
    products.filter(product => product.title == e.target.value)
  }

  return (
    <>
      <nav className="nav-bar position-fixed d-flex px-4">
        <Menu />
        <SearchInput />
        <Login />
      </nav>
    </>
  );
}
