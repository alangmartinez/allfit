import { Link } from "react-router-dom";
import "./CartWidget.css";

export default function CartWidget({ quantity }) {
  return (
    <>
      <Link to='/cart' className="cart-widget d-flex justify-content-center align-items-center px-2 ms-auto me-3">
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="quantity">{quantity == 0 ? null : quantity}</span>
      </Link>
    </>
  );
}
