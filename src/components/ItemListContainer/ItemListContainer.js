import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";
import "./ItemListContainer.css";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((products) => setProducts(products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  const handleOnResize = () => {
    console.log("Se ha redimenzionado la ventana del contenedor ItemListContainer");
  };

  useEffect(() => {
    window.addEventListener('resize', handleOnResize);

    return(()=>{
      window.removeEventListener('resize', handleOnResize);
      }
    )
  }, []);

  const style = {
    marginTop: "6rem",
    marginBottom: "2rem",
  };

  return (
    <>
      <div className="container pb-5" onClick={(e)=> { console.log('Hiciste click en el ItemListContainer')}}>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <Spinner animation="border" variant="warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
}
