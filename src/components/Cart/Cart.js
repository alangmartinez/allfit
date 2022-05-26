import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeProduct } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <CartContainer className="shadow rounded-2">
          <CartTitle>
            <i className="fa-solid fa-cart-shopping me-2"></i>Cart :
          </CartTitle>
          <Hr></Hr>
          {cart.map((product) => {
            return (
              <ProductContainer key={product.id}>
                <StyledLink to={`/detail/${product.id}`}>
                  <Img
                    src={product.image}
                    className="img-fluid rounded-1 shadow-lg"
                  ></Img>
                </StyledLink>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductQuantity>{product.quantity}</ProductQuantity>
                <ProductPrice>{product.price}</ProductPrice>
                <TrashIcon
                  className="fa-solid fa-trash shadow"
                  onClick={() => removeProduct(product.id)}
                ></TrashIcon>
              </ProductContainer>
            );
          })}
        </CartContainer>
      </div>
    </>
  );
}

const CartContainer = styled.div`
  padding: 3rem 3.5rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.25rem;
  backdrop-filter: blur(5px);
  gap: 1.12rem;
`;
const CartTitle = styled.h2`
  color: #f9f9f9;
  margin: 0;
  text-align: start;
  padding: 0;
  text-transform: uppercase;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: 'Raleway', sans-serif;
`;
const Hr = styled.hr`
  color: #f9f9f9;
  opacity: 1;
  margin: 0;
  margin-bottom: 0.25rem;
`;
const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 5rem;
  font-size: 1.2rem;
  padding: 0 1.5rem;
`;
const StyledLink = styled(Link)`
  height: 100%;
  width: 4rem;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  cursor: pointer;
`;
const ProductTitle = styled.p`
  text-decoration: none;
  color: #f9f9f9;
  text-align: start;
  letter-spacing: 2px;
  margin: 0;
`;
const ProductQuantity = styled.div`
  text-align: center;
  color: #f9f9f9;
`;
const ProductPrice = styled.div`
  text-align: center;
  color: #f9f9f9;
`;
const TrashIcon = styled.i`
  color: #f9f9f9;
  cursor: pointer;

  &:hover {
    color: rgb(230, 0, 0);
  }
`;
