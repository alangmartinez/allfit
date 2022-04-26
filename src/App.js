import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main">
        <div className="title-container">
          <Link to="/">
            <h2 className="title">Wellcome to All Fit</h2>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="/sale"></Route>
          <Route path="/contact-us"></Route>
          <Route path="/detail/:productId" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={
              <div className="container">
                <h2 className="title">Nothing Found</h2>
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
