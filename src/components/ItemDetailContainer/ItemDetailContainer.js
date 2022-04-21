import { getProductsById } from "../../asyncmock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

export default function ItemListDetail() {
  const [product, setProduct] = useState();
  const { productId } = useParams();

    useEffect(()=>{
        getProductsById(productId)
            .then(product => setProduct(product))
    },[])

    const style = {
      color: '#fff',
      fontSize: '1.5rem',
      marginBottom: '1.5rem'
    }
    const homeIcon = {
      lineHeight: 'unset'
    }

  return (
    <>
      {
        <div className='container py-4'>
          <div className='container goBack-cotainer' style={style}>
            <i className="fa-solid fa-house me-2" style={homeIcon}></i> Go Home
          </div>
          <ItemDetail {...product}/>
        </div>
      }
    </>
  )
}
