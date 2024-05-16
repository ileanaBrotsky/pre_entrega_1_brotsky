import { createContext, useState } from "react";

export const CartContext = createContext(); //--->contexto

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((element) => element.id == product.id)) {
      let newCart = cart.map((element) => {
        if (element.id == product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newCart);
    } else setCart([...cart, product]);
  };

  const deleteById = (id) => {
    console.log("el id es", id);
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };
  const clearCart = () => {
    setCart([]);
  };
  const getQuantityById = (id) => {
    let product = cart.find((prod) => prod.id == id);
    return product?.quantity;
  };
  const getTotalPrice=()=>{
      let totalPrice=  cart.reduce((acc, product)=>{
          return acc+ (product.price *product.quantity)
        },0)
    return totalPrice;   
  }
  const getTotalProducts=()=>{
    let totalProducts=  cart.reduce((acc, product)=>{
        return acc+ product.quantity
      },0)
  return totalProducts;   
}
  let data = { cart, addToCart, clearCart, deleteById, getQuantityById, getTotalPrice, getTotalProducts};
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
