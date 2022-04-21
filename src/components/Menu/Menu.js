import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <ul className="list d-flex justify-content-end align-items-center ms-auto">
          <Link to='/' className='link'>
            <li className="list-item">Home</li>
          </Link>
          <Link to='/man' className='link'>
            <li className="list-item d-flex flex-column">Man</li>
          </Link>
          <Link to='/women' className='link'>
            <li className="list-item">Women</li>
          </Link>
          <Link to='/sale' className='link'>
            <li className="list-item">Sale</li>
          </Link>
          <Link to='/contact-us' className='link'>
            <li className="list-item">Contact Us</li>
          </Link>
      </ul>
    </>
  );
}
