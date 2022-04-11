import {useState, useEffect} from 'react'
import './itemCount.css'

export default function ItemCount({initial, stock, onAdd}) {

    const [count, setCount] = useState(initial);

    useEffect(()=> {
        console.log('Se ha montado el componente');
        return(
            ()=>{
                console.log('Se ha desmontado el componente')
            }
        )
    }, []);

    const add = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const decrease = ()=>{
        if(count > 0 ) setCount(count - 1)
    }

    console.log('Se va a montar el componente');

  return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <p className="count me-3 my-auto ">You clicked {count} times!</p>
                <button className="btn btn-light me-3 py-1 px-3" onClick={add}> + </button>
                <button className="btn btn-light me-3 py-1 px-3" onClick={decrease}> - </button>
            </div>
            <button 
                className='btn btn-warning'
                onClick={()=> onAdd(count)}
            >
                <i className="fa-solid fa-cart-plus me-1 px-2"></i>Agregar al Carrito
            </button>
        </>
  )
}

