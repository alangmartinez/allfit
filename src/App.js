import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { NotificationProvider } from "./context/NotificationContext";
import styled from 'styled-components';

export default function App() {
  return (
    <CartContextProvider>
      <NotificationProvider>
          <BrowserRouter>
            <header>
              <NavBar />
            </header>
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
                <Route
                  path="/detail/:productId"
                  element={<ItemDetailContainer />}
                ></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route
                  path="*"
                  element={
                    <div className="container d-flex justify-content-center align-items-center">
                      <h2 className="title">404 - Nothing Found</h2>
                    </div>
                  }
                />
              </Routes>
              <WhatsAppIcon className="shadow-lg" src="/icons/whatsapp.png" alt="whats app icon"/>
            </main>
          </BrowserRouter>
      </NotificationProvider>
    </CartContextProvider>
  );
}

const WhatsAppIcon = styled.img`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  height: 55px;
  width: 55px;
  cursor: pointer;
`
