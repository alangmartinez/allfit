import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { firestoreDataBase } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ItemListDetail({ setCart, cart }) {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoc(doc(firestoreDataBase, "products", productId))
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .catch((e) =>
        console.log(
          `Oh no!, something goes wrong when we are trying to load this product, please contact us and send us the below error: ${e}`
        )
      )
      .finally(() => {
        setLoading(false);
      }, 2000);
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
