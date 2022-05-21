import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <>
        <div className="footer p-3 shadow-lg position-absolute">
          <h5 className='mb-4 row container' style={{color: '#f9f9f9'}}>Categorys :</h5>
          <ul className='menu-footer d-flex flex-column align-items-start justify-content-center gap-2 m-0 row'>
            <Link to='/'>Home</Link>
            <Link to='/category/man'>Man</Link>
            <Link to='/category/woman'>Woman</Link>
            <Link to='/sale'>Sale</Link>
          </ul>
        </div>
    </>
  )
}
