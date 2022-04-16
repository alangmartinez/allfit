import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from './../../asyncmock';
import './ItemListContainer.css'

export default function ItemListContainer({title}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  // const onAdd = (operador) => {
  //   if (operador === "+") {
  //     setCount(count + 1);
  //   }
  //   if (operador === "-") {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <>
      <div className="container">
        <h2 className='title mb-5' style={{marginTop: '12rem'}}>{title}</h2>
      </div>
      <ItemList products={products}/>
    </>
  )
}
