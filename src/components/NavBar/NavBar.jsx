import "./navBar.css";
import SearchInput from "./../SearchInput/SearchInput";
import Login from "./../Login/Login";
import Menu from "./../Menu/Menu";

export default function navBar() {
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
