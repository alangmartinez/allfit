import Counter from './../Counter/Counter';
import './ItemDetail.css';

export default function ItemDetail({title, description, price, stock, image}) {

    return (
        <>
            <div className='d-flex justify-content-center gap-3 flex-wrap mt-4'>
                <picture className='col-3'>
                    <img className='fluid-img img-product' src={image}></img>
                </picture>
                <div className='container detail-container col'>
                    <div className='row detail-header'>
                        <h5 className='title'>{title}</h5>
                        <span className='price'>{price}</span>
                    </div>
                    <hr/>
                    <p className='detail-body mb-5 row px-3'>{description}</p>
                    <div className='detail-footer d-flex gap-4 justify-content-end'>
                        <div>
                            <Counter stock={stock} initial={0}></Counter>
                        </div>
                        <button className='btn btn-warning col-2 py-2'><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
