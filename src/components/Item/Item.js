import "./Item.css";
import { Link } from 'react-router-dom';

export default function Item({ id, title, image }) {

  const handleClick = (e) => {
    e.stopPropagation();
    console.log('Hiciste click en Item')
  }

  return (
    <>
      <div className="card shadow-lg" style={{ width: 18 + "rem" }} key={id}>
        <img src={image} className="card-img-top img-fluid" alt={title} />
        <div className="backface">
          <Link to={`/detail/${id}`} className='btn btn-outline-warning col-6 seeMore-btn' onClick={handleClick}>+ See More</Link>
        </div> 
      </div>
    </>
  );
}
