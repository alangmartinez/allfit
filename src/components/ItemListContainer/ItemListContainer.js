import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((products) => setProducts(products))
      .catch((err) => console.log(`¡Oh no!, something has gone wrong during the loading products. Please contact us and send us the error below: ${err}`))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  }, [categoryId]);

  return (
    <>
      <div
        className="container pb-5 item-list-container"
        onClick={(e) => {
          console.log("Hiciste click en el ItemListContainer");
        }}
      >
        {loading ? <Loader></Loader> : <ItemList products={products} />}
      </div>
    </>
  );
}
