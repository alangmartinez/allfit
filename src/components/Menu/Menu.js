import "./Menu.css";
import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  
  const category = [
    {
      id: 'man',
      description: 'Man',
    },
    {
      id: 'woman',
      description: 'Woman',
    }
  ]

  return (
    <>
      <ul className="list d-flex justify-content-end align-items-center">
        <Link to="/" className="link">
          <li className="list-item">Home</li>
        </Link>
        {
          category.map( item => {
            return(
              <Link to={`/category/${item.id}`} className='link' key={item.id}>
                <li className='list-item'>
                  {item.description}
                </li>
              </Link>
            )
          })
        }
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
