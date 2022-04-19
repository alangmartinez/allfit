import Counter from "../Counter/Counter";
import "./Item.css";
import { useState } from "react";

export default function Item({ id, title, image, price, description, stock }) {
  const [show, setShow] = useState();

  return (
    <>
      <div className="card shadow-lg" style={{ width: 18 + "rem" }} key={id}>
        <img src={image} className="card-img-top img-fluid" alt={title} />
        {
          show ? <div className="card-body d-flex flex-column">
                  <p className="card-title">{title}</p>
                  <span className="price">{price}</span>
                  <i className="fa-solid fa-chevron-up" onClick={()=> setShow(!show)}></i>
                  <hr />
                  <p className='card-text'>{description}</p>
                  <div className="d-flex align-items-center detail-buttons">
                    <Counter initial={0} stock={stock}/>
                    <button className='btn btn-warning ms-4'><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                  </div>
                </div> : null
        }
        <div className="d-flex justify-content-center align-items-center position-absolute bottom-0 box-buttons">
        {
          show ? '' : <button className="btn btn-outline-warning" onClick={()=> setShow(!show)}>+ See More</button>
        }
        </div>
      </div>
    </>
  );
}
