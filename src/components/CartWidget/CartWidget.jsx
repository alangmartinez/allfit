import './CartWidget.css'

export default function CartWidget({quantity}) {

  return (
    <>
        <div className="cart-widget d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='quantity'>{quantity}</span>
        </div>
    </>
  )
}
