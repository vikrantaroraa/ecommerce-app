import "./components/ProductCard/ProductCard";
import "./App.css";

import Header from "./components/Header";
import MobileFilter from "./components/MobileFilter";
import Products from "./Pages/shop/products";
import { useCart } from "./context/cart-context";
import { useState } from "react";
import { Cart } from "./Pages/cart/cart";

export function CartHeader() {
  const { itemsInCart } = useCart();
  return (
    <>
      <h2> Items in cart: {itemsInCart.length} </h2>
      {console.log({ itemsInCart })}
    </>
  );
}

function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <button onClick={() => setRoute("products")}>Products</button>
      <button onClick={() => setRoute("cart")}>Cart</button>
      <Header />
      {route === "products" && <Products />}
      {route === "cart" && <Cart />}
      <MobileFilter />
    </div>
  );
}

export default App;
