import Header from "src/components/Header/Header";
import MobileFilter from "src/components/MobileFilter/MobileFilter";
import AllProducts from "src/pages/Shop/AllProducts";
import Cart from "src/pages/Cart/Cart";
import Wishlist from "src/pages/Wishlist/Wishlist";
import { Routes, Route } from "react-router-dom";
import "src/App.css";
// import ProductDetails from "src/pages/Product/ProductDetails";
import Login from "src/components/Login/Login";
import ProtectedRoutes from "src/components/ProtectedRoutes/ProtectedRoutes";
import Address from "src/pages/protectedPages/Address/Address";
// import ProductInfo from "src/components/ProductInfo/ProductInfo";
import ProductDetails from "src/pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<AllProducts />} /> */}
        <Route path="/" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/product/:productId" element={<ProductDetails />} /> */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/address" element={<Address />} />
        </Route>
      </Routes>
      {/* <MobileFilter /> */}
    </div>
  );
}

export default App;
