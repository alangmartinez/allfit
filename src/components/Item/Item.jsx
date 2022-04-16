import Counter from '../Counter/Counter';
import './Item.css';

export default function Item({ id, title, image, price, description, stock }) {

  return (
    <>
      <div className="card shadow-lg" style={{ width: 18 + "rem" }} key={id}>
        <img src={image} className="card-img-top img-fluid" alt={title} />
        <div className="card-body shadow-lg">
          <h5 className="card-title">{title}</h5>
          <span className="price">{price}</span>
          <hr />
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto mb-0">
            <Counter initial={0} stock={stock}/>
            <a className="btn btn-warning me-2" style={{ width: "auto" }}>
              <i className="fa-solid fa-cart-plus me-2"></i>Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
