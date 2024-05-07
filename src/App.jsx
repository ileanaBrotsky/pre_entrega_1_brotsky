import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer"
import CheckoutFormik from "./components/pages/checkoutFormik/CheckoutFormik";
import Error_404 from "./components/pages/error_404/Error_404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="*" element={<Error_404/>} />
          <Route path="/checkout" element={<CheckoutFormik />} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
