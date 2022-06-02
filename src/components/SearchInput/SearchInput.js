import "./searchInput.css";

export default function SearchInput() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="search-input form-control col-md"
          name="search"
          id="search-input"
          placeholder="Search..."
        />
      </div>
    </>
  );
}
