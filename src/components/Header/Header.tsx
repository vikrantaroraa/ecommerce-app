import { useState } from "react";
import { useCart } from "src/context/cart-and-wishlist-context";
import { useWishList } from "src/context/wishlist-context";
import { Link } from "react-router-dom";
import "src/components/Header/Header.css";

const Header = () => {
  const totalItemsInCart = () => {
    let totalItems = 0;
    cart.map((item: any) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  const [route, setRoute] = useState("products");
  const {
    state: { cart, wishlist },
  } = useCart();
  const { itemsInWishList } = useWishList();

  return (
    <div className="header">
      <div className="navigation__bar">
        <div className="logo">BlackHole</div>
        <div className="navigation-link__men">
          <Link to="/">All Products</Link>
        </div>
        <div className="navigation-link__women">WOMEN</div>
        <div className="navigation-kids">KIDS</div>
        <div className="navigation-beauty">BEAUTY</div>
        <div className="navigation-decor">DECOR</div>
      </div>
      <div className="search__input">
        <input placeholder="Search for products, brands and more" />
      </div>
      <div className="header__actions">
        <span>Profile</span>
        <span>
          <Link to="/wishlist">Wishlist({wishlist.length})</Link>
        </span>
        <span onClick={() => setRoute("cart")}>
          <Link to="/cart">Bag({totalItemsInCart()})</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
