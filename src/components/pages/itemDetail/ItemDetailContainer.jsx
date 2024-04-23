import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import { products } from "../../../productsMock"
const ItemDetailContainer = () => {

    const {id}=useParams()
    const[item, setItem]=useState({})

    useEffect(()=>{
    let itemFinded= products.find(product=> product.id=== +id)
      const getProduct= new Promise((resolve, reject)=>{
        if(itemFinded===undefined) reject("producto no encontrado")
        else resolve(itemFinded)
      })
      getProduct.then((res)=>setItem(res))
    
    }, [id])
   
  return (
    <ItemDetail item={item} isOneProduct={true}/>
  )
}

export default ItemDetailContainer