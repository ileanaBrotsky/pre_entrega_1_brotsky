import ItemList from "./ItemList";
import {useState, useEffect} from "react"
import { products } from "../../../productsMock.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const {category}= useParams()


  const [items, setItems]= useState([]);
  const [error, setError]= useState(null);
  
  useEffect(()=>{
    let productsFiltered= products.filter(product=> product.category===category)
  
    const getProducts= new Promise((resolve, reject)=>{
      let x=true
      if(x) resolve(category?productsFiltered:products)
      else reject({status: 400, message:"Productos no encontrados"})
    })
    getProducts
    .then((res)=>setItems(res))
    .catch((error)=>
            {
              console.log(error)
              setError(error)
            }
          )
  },[category])
  
  return <ItemList items={items} error={error}/>
   
};

export default ItemListContainer;
