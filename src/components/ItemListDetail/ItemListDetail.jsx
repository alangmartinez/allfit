import { getProductsById } from "../../asyncmock";
import { useEffect } from "react";
import Counter from "../Counter/Counter";

export default function ItemListDetail() {

    useEffect(()=>{
        getProductsById(id)
            .then(response => response.json())
            .then(product => console.log(product))
    },[])

  return (
    <>
        
    </>
  )
}
