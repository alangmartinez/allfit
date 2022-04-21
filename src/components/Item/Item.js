import "./Item.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

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
                  <div className='row justify-content-center detail-button-container'>
                    <Link to={`/detail/${id}`} className='btn btn-outline-warning col-6'>+ See More</Link>
                  </div>
                </div> : null
        }
        <div className="d-flex justify-content-center align-items-center position-absolute bottom-0 box-buttons">
        {
          show ? '' : <button className="btn btn-outline-warning px-4" onClick={()=> setShow(!show)}><i className="fa-solid fa-chevron-up"></i></button>
        }
        </div>
      </div>
    </>
  );
}
