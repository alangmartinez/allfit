import { useState } from "react";
import AddFavoriteModal from "../AddFavoriteModal/AddFavoriteModal";
import RemoveFavoriteModal from "../RemoveFavoriteModal/RemoveFavoriteModal";
import Counter from "./../Counter/Counter";
import "./ItemDetail.css";

export default function ItemDetail({
  title,
  description,
  price,
  stock,
  image,
  talles = [],
}) {
  const [favorite, setFavorite] = useState(false);
  const [showFav, setShowFav] = useState(false);
  const [showRemoveFav, setShowRemoveFav] = useState(false);

  const handleModal = () => {
    setShowFav(!showFav);
    setTimeout(()=>{
      setShowFav(false);
    },1500)
  };

  const handleRemoveFav = ()=> {
    setShowRemoveFav(!showRemoveFav);
    setTimeout(()=>{
      setShowRemoveFav(false);
    },1500)
  }

  const Select = ({ talles = [] }) => {
    return (
      <>
        <label className="d-block px-0 mb-2">Talles :</label>
        <div className="d-flex gap-3 px-0">
          {talles.map((talle) => (
            <button
              key={talle.id}
              className="btn btn-outline-warning px-1 shadow-lg"
              style={{
                width: "2.2rem",
                fontSize: "13px",
                textAlignCenter: "center",
              }}
            >
              {talle.size}
            </button>
          ))}
        </div>
      </>
    );
  };

  console.log(talles);

  return (
    <>
      <AddFavoriteModal active={showFav}></AddFavoriteModal>
      <RemoveFavoriteModal active={showRemoveFav}></RemoveFavoriteModal>
      <div className="d-flex justify-content-center gap-3 flex-wrap mt-4 item-detail">
        <picture className="col-3">
          <img className="fluid-img img-product" src={image}></img>
        </picture>
        <div className="container detail-container col">
          <div className="detail-header">
            <h5 className="title">{title}</h5>
            <span className="price">{price}</span>
            {favorite ? (
              <i
                className="fa-solid fa-heart"
                style={{ color: "#ffc107" }}
                onClick={() => {
                  setFavorite(!favorite);
                  handleRemoveFav();
                }}
              ></i>
            ) : (
              <i
                className="fa-regular fa-heart"
                onClick={() => {
                  setFavorite(!favorite);
                  handleModal();
                }}
              ></i>
            )}
          </div>
          <hr />
          <div className="detail-body mb-5 px-3 row">
            <p className="description p-0">{description}</p>
            <Select talles={talles}></Select>
          </div>
          <div className="detail-footer d-flex gap-4 justify-content-end">
            <Counter initial={0} stock={stock}></Counter>
          </div>
        </div>
      </div>
    </>
  );
}
