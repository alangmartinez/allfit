import {useState, useEffect} from 'react'

export default function ItemCount({initial, stock}) {
    const [count, setCount] = useState(initial);

    useEffect(()=> {
        console.log('Se ha montado el componente !');
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
            <div className="d-flex align-items-center gap-2">
                <button className='btn btn-outline-warning' onClick={decrease}>-</button>
                <span className='count' style={{color: '#000'}}>{count}</span>
                <button className='btn btn-outline-warning' onClick={add}>+</button>
            </div>
        </>
  )
}

