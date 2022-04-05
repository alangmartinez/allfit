import { useState } from 'react';
import './itemCount.css'

export default function ItemCount({stock, initial}) {

    const [count, setCount] = useState(initial);

    const add = ()=>{
        if(count < stock){
            setCount(count + 1);
        }
    }
    const decrease = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }

  return (
    <>
        <div className="d-flex flex-column">
            <button 
                className='btn btn-primary m-auto my-3 py-2'
                onClick={add}
            >
                +
            </button>
            <p className='m-auto count'>{count}</p>
            <button 
                className='btn btn-primary m-auto my-3 py-2'
                onClick={decrease}
            >
                -
            </button>
            
        </div>
    </>
  )
}
