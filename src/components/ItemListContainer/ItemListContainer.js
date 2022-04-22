import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";
import "./ItemListContainer.css";
import Spinner from "react-bootstrap/Spinner";

export default function ItemListContainer({ title }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err))
      .finally(setLoading(false))
  }, []);

  const style = {
    marginTop: "6rem",
    marginBottom: "2rem",
  };

  return (
    <>
      <div className="container pb-5">
        <h2 className="title" style={style}>
          {title}
        </h2>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: '100%'}}>
            <Spinner animation="border" variant="warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <ItemList products={products} />
        )}
        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-primary" onClick={()=>setLoading(!loading)}>Load Spinner</button>
        </div>
      </div>
    </>
  );
}
