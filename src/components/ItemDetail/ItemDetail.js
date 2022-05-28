import React from "react";
import { useState, useContext, useEffect } from "react";
import AddFavoriteModal from "../AddFavoriteModal/AddFavoriteModal";
import RemoveFavoriteModal from "../RemoveFavoriteModal/RemoveFavoriteModal";
import Counter from "./../Counter/Counter";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ItemDetail({
  id,
  title,
  description,
  price,
  stock,
  image,
  sizes,
}) {
  const [favorite, setFavorite] = useState(false);
  const [showFav, setShowFav] = useState(false);
  const [showRemoveFav, setShowRemoveFav] = useState(false);
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(0);
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });

  const { open, vertical, horizontal } = state;

  const handleClose = () => {
    setState({...state, open: false});
  }

  const { cart, addProduct } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // onAdd function is for the Counter component.
  const onAdd = (count) => {
    setQuantity(count);
    const product = {
      id,
      title,
      size,
      image,
      price,
      quantity: count,
    };
    addProduct(product);
    if(count > 0) {
      setState({...state, open: true})
    }
  };

  // Changing the state of an alert to display it.
  const handleModal = () => {
    setShowFav(!showFav);
    setTimeout(() => {
      setShowFav(false);
    }, 1500);
  };

  // Changing the state of an alert to display it.
  const handleRemoveFav = () => {
    setShowRemoveFav(!showRemoveFav);
    setTimeout(() => {
      setShowRemoveFav(false);
    }, 1500);
  };

  // Select Component
  const Select = ({ sizes = [] }) => {
    return (
      <>
        <label className="d-block px-0 mb-2">Talles :</label>
        <div className="d-flex gap-3 px-0">
          {sizes.map((item) => (
            <button
              key={item.id}
              className="btn btn-outline-warning px-1 shadow-lg"
              style={{
                width: "2.2rem",
                fontSize: "13px",
                textAlignCenter: "center",
              }}
              onClick={() => {
                setSize({ ...item, size: size });
              }}
            >
              {item.size}
            </button>
          ))}
        </div>
      </>
    );
  };

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
            <Select sizes={sizes}></Select>
          </div>
          <div className="detail-footer d-flex gap-4">
            {quantity > 0 ? (
              <Link to="/cart" className="btn btn-warning">
                Go to Cart
              </Link>
            ) : (
              <Counter initial={0} stock={stock} onAdd={onAdd}></Counter>
            )}
          </div>
        </div>
      </div>
      <Snackbar anchorOrigin={{vertical, horizontal}} open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          The product has been added to cart !
        </Alert>
      </Snackbar>
    </>
  );
}
