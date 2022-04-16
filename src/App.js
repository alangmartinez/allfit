import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <ItemListContainer title="Welcome to All Fit">
          <button className="btn btn-primary m-auto">Boton 1</button>
          <button className="btn btn-primary m-auto">Boton 2</button>
        </ItemListContainer>
        <CartWidget quantity={0} />
      </main>
      <Footer/>
    </>
  );
}