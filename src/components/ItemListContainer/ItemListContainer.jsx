import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from './../../asyncmock';
import './ItemListContainer.css'

export default function ItemListContainer({title}) {
  const [show, setShow] = useState(true);
  const [products, setProducts] = useState([]);

  const addToCart = (quantity)=>{
    console.log(`Se han agregado al carrito ${quantity} productos`);
  }

  useEffect(()=>{
      getProducts().then(products =>{
          setProducts(products)
      })
  },[])

  return (
    <>
      <div className="d-flex justify-content-center">
          { show ? <ItemCount initial={0} stock={10} onAdd={addToCart} /> : <p className='data'>Se ha desmontado el componente</p> }
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button 
          className={ show ? 'btn btn-danger my-5' : 'btn btn-success my-5' } 
          onClick={ ()=> setShow(!show) }
        >
            { show ? 'Desmontar' : 'Montar' }
        </button>
      </div>
      <div className="container">
      <h2 className='title mb-5'>{title}</h2>
        <div className="products d-flex justify-content-center align-items-center gap-4">
          { products.map( (product, index) => 
              <div className="card shadow-lg"style={{width: 18 + 'rem'}} key={index}>
                  <img src={product.image} className="card-img-top img-fluid" />
                  <div className="card-body shadow-lg">
                      <h5 className="card-title">{product.title}</h5>
                      <span className="price">{product.price}</span>
                      <hr />
                      <p className="card-text">{product.description}</p>
                      <div className="d-flex justify-content-end align-items-center mt-auto mb-0">
                          <a className="btn btn-warning me-2" style={{width: 'auto'}}><i className='fa-solid fa-cart-plus me-2'></i>Add to Cart</a>
                      </div>
                  </div>
              </div>
           ) }
        </div>
      </div>
    </>
  )
}
