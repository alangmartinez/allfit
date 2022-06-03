import "./Menu.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestoreDataBase } from "../../services/firebase";

export default function Menu() {
  const [categories, setCategories] = useState([]);

  const collectionRef = query(collection(firestoreDataBase, 'categories'), orderBy('order', 'asc'))

  useEffect(() => {
    getDocs(collectionRef)
      .then((response) => {
        const categories = response.docs.map((category) => {
          return { id: category.id, ...category.data() };
        });
        setCategories(categories);
      })
      .catch((e) =>
        console.log(
          `Ups, we sorry ! We have a problem redirecting you to this category, please contact us and send us the below error ${e}`
        )
      );
  }, []);

  return (
    <>
      <ul className="list d-flex justify-content-end align-items-center">
        <Link to="/" className="link">
          <li className="list-item">Home</li>
        </Link>
        {categories.map((category) => {
          return (
            <Link to={`/category/${category.id}`} className="link" key={category.id}>
              <li className="list-item">{category.description}</li>
            </Link>
          );
        })}
        <Link to="/contact-us" className="link">
          <li className="list-item">Contact Us</li>
        </Link>
      </ul>
    </>
  );
}
