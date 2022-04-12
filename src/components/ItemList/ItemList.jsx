import Item  from './../Item/Item';

export default function ItemList({products}) {
  return (
    <>
        <div className="products d-flex justify-content-center align-items-center gap-4">
            {   
                products.map( product => <Item key={product.id} {...product}/>) 
            }
        </div>
    </>
  )
}