import { useState } from "react";
import "./Counter.css";

export default function Counter({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      {count < stock ? null : (
        <div className="vertical-aligned">
          Sorry ! , we don´t have more stock.
        </div>
      )}
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-warning" onClick={decrease}>
          -
        </button>
        <span className="count">{count}</span>
        <button
          className={
            count == stock
              ? "btn btn-outline-warning disabled"
              : "btn btn-outline-warning"
          }
          onClick={increase}
        >
          +
        </button>
        <button className="btn btn-warning col-7 py-2 ms-2" onClick={()=> onAdd(count)}>
          <i className="fa-solid fa-cart-plus me-2"></i>Add to Cart
        </button>
      </div>
    </>
  );
}
