import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='main'>
      <Routes>
        <Route path='/' element={<ItemListContainer title='Welcome to All Fit'/>}></Route>
        <Route path='/man'></Route>
        <Route path='/women'></Route>
        <Route path='/sale'></Route>
        <Route path='/contact-us'></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
      </Routes>
      </main>

    </BrowserRouter>
  );
}