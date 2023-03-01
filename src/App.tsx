import Header from "src/components/Header/Header";
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
import Shipping from "src/pages/Shipping/Shipping";
import LandingPage from "src/pages/LandingPage/LandingPage";
import Footer from "src/components/Footer/Footer";
import MobileHeader from "src/components/MobileHeader/MobileHeader";

function App() {
  return (
    <div className="App">
      <MobileHeader />
      <Header />
      <Routes>
        <Route path="/all-products" element={<AllProducts />} />
        {/* <Route path="/product" element={<ProductDetails />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/address" element={<Address />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
