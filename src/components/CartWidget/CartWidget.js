import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

export default function CartWidget() {
  const { getQuantity } = useContext(CartContext);

  return (
    <>
      <Link
        to="/cart"
        className="cart-widget d-flex justify-content-center align-items-center px-2 ms-auto me-3"
      >
        <i className="fa-solid fa-cart-shopping shadow"></i>
        <span className="quantity ms-2 shadow">
          {getQuantity() === 0 ? null : getQuantity()}
        </span>
      </Link>
    </>
  );
}
