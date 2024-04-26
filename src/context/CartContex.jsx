import { createContext, useState } from "react";

export const CartContext = createContext(); //--->contexto

const CartContexProviader = ({ children }) => {

  const [cart, setCart] = useState([{ title: "hola" }, { title: "adios" },  { title: "adios" }]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };
  const clearCart = () => {
    setCart([]);
  };

  let data = { cart, addToCart, clearCart, deleteById };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContexProviader;
