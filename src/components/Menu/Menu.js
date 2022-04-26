import "./Menu.css";
import { Link, NavLink } from "react-router-dom";
import { getCategorys } from "../../asyncmock";
import { useEffect, useState } from "react";

export default function Menu() {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getCategorys().then((categorys) => setCategorys(categorys));
  }, []);

  return (
    <>
      <ul className="list d-flex justify-content-end align-items-center ms-auto">
        <Link to="/" className="link">
          <li className="list-item">Home</li>
        </Link>
        {categorys.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({isActive}) => isActive ? 'active' : 'link'}
          >
            <li className="list-item">{category.description}</li>
          </NavLink>
        ))}
        <Link to="/sale" className="link">
          <li className="list-item">Sale</li>
        </Link>
        <Link to="/contact-us" className="link">
          <li className="list-item">Contact Us</li>
        </Link>
      </ul>
    </>
  );
}
