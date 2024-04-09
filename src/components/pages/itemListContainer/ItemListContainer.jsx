import ItemList from "./ItemList";
import {useState, useEffect} from "react"
import { products } from "../../../productsMock.js";

const ItemListContainer = () => {
  
  const [items, setItems]= useState([]);
  const [error, setError]= useState(null);
  useEffect(()=>{
    const getProducts= new Promise((resolve, reject)=>{
      let x=true
      if(x) resolve(products)
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
  },[])
  
 console.log(items)
  return <ItemList items={items} error={error}/>
   
};

export default ItemListContainer;
