import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { db } from "../../../firebaseConfig.js";
import { collection, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContex.jsx";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);
  
  let inicialCounter= getQuantityById(id)
  console.log(inicialCounter)
  
  useEffect(() => {
    const productsCollection = collection(db, "products");
    let itemFinded = doc(productsCollection, id);
    getDoc(itemFinded).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (quantity) => {
     let itemFinal = { ...item, quantity: quantity };
     addToCart(itemFinal)
  };
  return <ItemDetail item={item} isItemDetail={true} onAdd={onAdd} initial={inicialCounter}/>;
};

export default ItemDetailContainer;
