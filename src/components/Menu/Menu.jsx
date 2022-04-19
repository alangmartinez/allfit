import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <ul className="list d-flex justify-content-end align-items-center ms-auto">
          <Link to='/home'>
            <li className="list-item">Home</li>
          </Link>
          <li className="list-item d-flex flex-column">Man</li>
          <li className="list-item">Women</li>
          <li className="list-item">Sale</li>
          <li className="list-item">Contact Us</li>
      </ul>
    </>
  );
}
