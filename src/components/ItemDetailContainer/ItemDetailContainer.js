import { getProductsById } from "../../asyncmock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";


export default function ItemListDetail({ setCart, cart }) {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsById(productId)
      .then((product) => setProduct(product))
      .catch((e) => console.log(e))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  }, [productId]);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="container pb-4">
          <Link to="/" className="container goBack-container">
            <i className="fa-solid fa-chevron-left me-2"></i>
            Go Home
          </Link>
          <ItemDetail {...product} setCart={setCart} cart={cart} />
        </div>
      )}
    </>
  );
}
