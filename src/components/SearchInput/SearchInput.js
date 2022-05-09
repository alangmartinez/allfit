import { useState } from 'react';
import './searchInput.css'

export default function SearchInput() {
    const [show, setShow] = useState(false);

    const handleOnKeyDownSearch = (e)=> {
        console.log(e);
        if(e.target.value.length >= 3) {
            console.log(e.target.value.replace(/\s+/g, ''));
            if (e.code == 'Enter') {
                console.log('Enviado')
            }
        }
    }

  return (
    <>
        <div className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-magnifying-glass" onClick={() => setShow(!show)}></i>
            <input 
                type="text"
                className="search-input form-control col-md"
                name="search"
                id="search-input"
                placeholder='Search...'
                onKeyDown={handleOnKeyDownSearch}
            />
        </div>
    </>
  )
}
