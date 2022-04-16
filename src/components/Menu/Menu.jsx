import './Menu.css';

export default function Menu() {
  return (
    <>
      <ul className="list d-flex justify-content-end align-items-center ms-auto">
        <a href="#" className="link py-3">
          <li className="list-item">Home</li>
        </a>
        <a href="#" className="link py-3">
          <li className="list-item d-flex flex-column">Man</li>
        </a>
        <a href="#" className="link py-3">
          <li className="list-item">Women</li>
        </a>
        <a href="#" className="link py-3">
          <li className="list-item">Sale</li>
        </a>
        <a href="#" className="link py-3">
          <li className="list-item">Contact Us</li>
        </a>
      </ul>
    </>
  );
}
