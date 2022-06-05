import "./Item.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Item({ id, title, image, newModel }) {

  return (
    <>
      <div
        className="card shadow position-relative"
        style={{ width: 18 + "rem" }}
        key={id}
      >
        {newModel ? (
          <NewModel
            className="px-3 shadow rounded-1"
          >
            NEW
          </NewModel>
        ) : null}
        <img src={image} className="card-img-top img-fluid" alt={title} />
        <div className="backface">
          <Link
            to={`/detail/${id}`}
            className="btn btn-outline-warning col-6 seeMore-btn"
          >
            + See More
          </Link>
        </div>
      </div>
    </>
  );
}

const NewModel = styled.span`
  position: absolute;
  top: .7rem;
  left: .7rem;
  font-size: .9rem;
  background-color: #ffc107;
  z-index: 30;
`