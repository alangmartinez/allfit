import './navBar.css';
import SearchInput from './../SearchInput/SearchInput';
import CartWidget from './../CartWidget/CartWidget';


export default function navBar() {


  return (
    <>
        <nav className='nav-bar position-fixed d-flex px-3'>
                <ul className="list d-flex justify-content-end align-items-center ms-auto">
                    <a href="#" className='link'><li className="list-item">Home</li></a>
                    <a href="#" className='link'><li className="list-item d-flex flex-column">Man</li></a>
                    <a href="#" className='link'><li className="list-item">Women</li></a>
                    <a href="#" className='link'><li className="list-item">Sale</li></a>
                    <a href="#" className='link'><li className="list-item">Contact Us</li></a>
                </ul>
                <SearchInput/>
                <CartWidget quantity={0}/>
        </nav>
    </>
  )
}


