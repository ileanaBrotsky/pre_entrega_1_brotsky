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
   
  return (
    <ItemDetail item={item} isOneProduct={true}/>
  )
}

export default ItemDetailContainer