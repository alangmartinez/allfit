import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {
  addDoc,
  collection,
} from "firebase/firestore";
import { firestoreDataBase } from "../../services/firebase";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function UserForm() {
  const { cart, getTotal } = useContext(CartContext);

  const [buyerData, setBuyerData] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const addDocToDataBase = () => {
    const userObj = {
      items: cart,
      buyerData: buyerData,
      total: getTotal(),
      date: new Date(),
    };
    console.log(userObj);

    const collectionRef = collection(firestoreDataBase, "purchases");

    addDoc(collectionRef, userObj)
      .then((response) => console.log(response))
      .catch((e) => {
        console.log(
          `Ups!, we have found a problem adding your purchase to our data base. ${e}`
        );
      });
  };

  const handleOnChange = (e) => {
    setBuyerData({
      ...buyerData,
      [e.target.name]: e.target.value,
    });
    console.log(buyerData);
  };

  return (
    <>
      <div className="container my-4 d-flex">
        <StyledForm className="form shadow py-5 px-5" style={style}>
          <div className="header container mt-5">
            <h2
              className="mb-0 h4 text-start"
              style={{ color: "#f9f9f9", opacity: 0.9 }}
            >
              Complete the form and finish your purchase :
            </h2>
            <hr style={{ color: "#f9f9f9", opacity: 0.5 }}></hr>
          </div>
          <div className="d-flex flex-column col-7 m-auto py-6">
            <div className="mb-4">
              <label className="mb-2" style={{ color: "#fff" }} htmlFor="name">
                Name :
              </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-1"
                id="name"
                name="name"
                onChange={handleOnChange}
              ></input>
              <span style={{ color: "rgba(255,255,255, .5)" }}>
                Type your name here...
              </span>
            </div>
            <div className="mb-4">
              <label
                className="mb-2"
                style={{ color: "#fff" }}
                htmlFor="surname"
              >
                Surame :
              </label>
              <input
                type="text"
                placeholder="Surname"
                className="form-control mb-1"
                id="surname"
                name="surname"
                onChange={handleOnChange}
              ></input>
              <span style={{ color: "rgba(255,255,255, .5)" }}>
                Type your surname here...
              </span>
            </div>
            <div className="mb-4">
              <label className="mb-2" style={{ color: "#fff" }} htmlFor="email">
                E-mail :
              </label>
              <input
                type="text"
                placeholder="example@mail.com"
                className="form-control mb-1"
                id="email"
                name="email"
                onChange={handleOnChange}
              ></input>
              <span style={{ color: "rgba(255,255,255, .6)" }}>
                Enter your e-mail
              </span>
            </div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              size="medium"
              onClick={addDocToDataBase}
            >
              Send
            </Button>
          </div>
        </StyledForm>
        <StyledPicture style={{ width: "50%" }}>
          <Img
            src="/images/fitness-image.jpg"
            alt="fitness image"
            className="img-fluid"
          ></Img>
          <StyledSpan className="h1">All</StyledSpan>
        </StyledPicture>
      </div>
    </>
  );
}

const style = {
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(0,0,0, .6)",
  border: "0",
  padding: "2.5rem",
  width: "50%",
};
const StyledForm = styled.div`
  border-radius: 0.25rem 0 0 0.25rem;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  transition: all ease 500ms;
  border-radius: 0 0.25rem 0.25rem 0;

  &:hover {
    transform: scale(1.1);
  }
`;
const StyledPicture = styled.picture`
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;
const StyledSpan = styled.span`
  color: #f9f9f9;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &::after {
    content: "/Fit";
    color: #ffc107;
  }
`;
