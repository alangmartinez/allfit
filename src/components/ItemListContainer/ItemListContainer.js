import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { firestoreDataBase } from "../../services/firebase";
import { getDocs, collection, where, query } from 'firebase/firestore';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(()=> {
    const collectionReference = categoryId 
      ? query(collection(firestoreDataBase, 'products'), where('category', '==', categoryId))
      : collection(firestoreDataBase, 'products');

    getDocs(collectionReference)
      .then(response => {
        const products = response.docs.map( doc => {
          return {id: doc.id, ...doc.data()}
        })
        setProducts(products);
      }
      )
      .catch(e => console.log(`¡Oh no!, something has gone wrong during the loading products. Please contact us and send us the error below: ${e}`))
      .finally(()=> {
        setTimeout(()=> {
          setLoading(false);
        }, 2000)
      })
  }, [categoryId])

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
