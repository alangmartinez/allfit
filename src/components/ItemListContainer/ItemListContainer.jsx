import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

export default function ItemListContainer(props) {

  console.log(props);

  const [show, setShow] = useState(true);

  const addToCart = (quantity)=>{
    console.log(`Se han agregado al carrito ${quantity} productos`);
  }

  return (
    <>
        <h2 className="title m-auto">{props.title}</h2>
        {
          props.children.map(btn => btn)
        }
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
    </>
  )
}
