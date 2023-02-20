import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { CartProvider } from "src/context/cart-context";
import { WishListProvider } from "src/context/wishlist-context";
import { CartProvider } from "src/context/cart-and-wishlist-context";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "src/context/auth-context";
import { SortAndFilterProvider } from "src/context/sort-and-filter-store/sort-and-filter-context";
import { SidebarFilterProvider } from "src/context/sidebar-filter-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SidebarFilterProvider>
        <AuthProvider>
          <WishListProvider>
            <CartProvider>
              <SortAndFilterProvider>
                <App />
              </SortAndFilterProvider>
            </CartProvider>
          </WishListProvider>
        </AuthProvider>
      </SidebarFilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
