import { getProductsById } from "../../asyncmock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { Link } from 'react-router-dom';

export default function ItemListDetail({ setCart, cart }) {
  const [product, setProduct] = useState();
  const { productId } = useParams();

    useEffect(()=>{
        getProductsById(productId)
            .then(product => setProduct(product))
    },[productId])

  return (
    <>
      {
        <div className='container pb-4'>
          <Link to='/' className='container goBack-container'>
            <i className="fa-solid fa-chevron-left me-2"></i>
            Go Home
          </Link>
          <ItemDetail {...product} setCart={setCart} cart={cart}/>
        </div>
      }
    </>
  )
}
