import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig.js";
import {products} from "../../../productsMock.js"
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const productsCollection = collection(db, "products");
    let search = category? query(productsCollection, where("category", "==", category)): productsCollection;

    getDocs(search).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [category]);
        const  addDocsProducts=()=>{
          let productsCollection= collection(db, "products")
          products.forEach(element => {
            addDoc(productsCollection, element)
          });

        
        }


  return (
    <>
      <h3>Bienvendios</h3>

      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        // <BounceLoader color="steelblue" size={50} />
        <p>Cargando docs...</p>
      )}
      {/* { <button onClick={addDocsProducts}>Agregar documentos</button> } */}
    </>
  );
};

export default ItemListContainer;
