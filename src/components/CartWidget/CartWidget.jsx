import './CartWidget.css'

export default function CartWidget(props) {

  console.log(props)

  return (
    <>
        <div className="cart-widget d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='quantity'>{props.quantity}</span>
        </div>
    </>
  )
}
