import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';
import './ItemListContainer.css'

export default function ItemListContainer({title}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  const style = {
    marginTop: '6rem',
    marginBottom: '2rem'
  }

  return (
    <>
      <div className="container pb-5">
        <h2 className='title' style={style}>{title}</h2>
        <ItemList products={products}/>
      </div>
    </>
  )
}
