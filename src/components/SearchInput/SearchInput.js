import './searchInput.css'

export default function SearchInput({handleOnKeyDownSearch}) {

    const search = ()=>{
        const searchInput = document.getElementById('search-input');
        searchInput.value = '';
    }

  return (
    <>
        <div className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
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
