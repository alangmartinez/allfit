import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { CustomContextProvider } from "./context/ContextCart";

export default function App() {
  return (
    <CustomContextProvider>
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
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/sale"></Route>
            <Route path="/contact-us"></Route>
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer></ItemDetailContainer>}
            ></Route>
            <Route
              path="/cart"
              element={
                <div className="container d-flex justify-content-center align-items-center">
                  <h2 className="title">404 - Nothing Found</h2>
                </div>
              }
            ></Route>
            <Route
              path="*"
              element={
                <div className="container d-flex justify-content-center align-items-center">
                  <h2 className="title">404 - Nothing Found</h2>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </CustomContextProvider>
  );
}
