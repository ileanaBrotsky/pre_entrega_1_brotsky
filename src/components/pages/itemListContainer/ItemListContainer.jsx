import ItemList from "./ItemList";
import {useState, useEffect} from "react"
import { products } from "../../../productsMock.js";
import { useParams } from "react-router-dom";
import {db} from "../../../firebaseConfig.js"
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  
  const {category}= useParams()


  const [items, setItems]= useState([]);
  const [error, setError]= useState(null);
  
  useEffect(()=>{
     const productsCollection= collection(db, "products")
     getDocs(productsCollection).then(res=> {
      let newArray= res.docs.map((doc)=>{
        return {id: doc.id, ...doc.data()}
     })
      setItems(newArray)
     })
    
    //  let productsFiltered= products.filter(product=> product.category===category)
    // console.log("los prod",productsFiltered)
    // const getProducts= new Promise((resolve, reject)=>{
    //   let x=true
    //   if(x) resolve(category?productsFiltered:products)
    //   else reject({status: 400, message:"Productos no encontrados"})
    // })
    // getProducts
    // .then((res)=>setItems(res))
    // .catch((error)=>
    //         {
    //           console.log(error)
    //           setError(error)
    //         }
    //       )
  },[category])
  
  return <ItemList items={items} error={error}/>
   
};

export default ItemListContainer;
