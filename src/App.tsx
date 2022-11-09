import Header from "src/components/Header/Header";
import MobileFilter from "src/components/MobileFilter/MobileFilter";
import AllProducts from "src/pages/Shop/AllProducts";
import Cart from "src/pages/Cart/Cart";
import Wishlist from "src/pages/Wishlist/Wishlist";
import { Routes, Route } from "react-router-dom";
import "src/App.css";
import ProductDetails from "src/pages/Product/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <MobileFilter />
    </div>
  );
}

export default App;
