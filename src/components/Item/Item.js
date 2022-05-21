import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ id, title, image, newModel }) {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Hiciste click en Item");
  };

  return (
    <>
      <div
        className="card shadow position-relative"
        style={{ width: 18 + "rem" }}
        key={id}
      >
        {newModel ? (
          <span
            className="position-absolute px-3 shadow-lg rounded-1"
            style={{
              backgroundColor: "#ffc107",
              top: ".7rem",
              left: ".7rem",
              fontSize: ".9rem",
            }}
          >
            NEW
          </span>
        ) : null}
        <img src={image} className="card-img-top img-fluid" alt={title} />
        <div className="backface">
          <Link
            to={`/detail/${id}`}
            className="btn btn-outline-warning col-6 seeMore-btn"
            onClick={handleClick}
          >
            + See More
          </Link>
        </div>
      </div>
    </>
  );
}
