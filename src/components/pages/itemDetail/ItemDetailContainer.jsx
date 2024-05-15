import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import { db } from "../../../firebaseConfig.js";
import { collection, doc, getDoc } from "firebase/firestore";
const ItemDetailContainer = () => {

    const {id}=useParams()
    const[item, setItem]=useState({})

    useEffect(()=>{
     const productsCollection= collection(db,"products");
     let itemFinded= doc(productsCollection,id)
     getDoc(itemFinded).then((res)=>{
      setItem({id:res.id, ...res.data()});
    })
    
    }, [id])
   
     const onAdd= (quantity)=>{
console.log(quantity)
     }
  return (
    <ItemDetail item={item} isOneProduct={true} onAdd={onAdd}/>
  )
}

export default ItemDetailContainer