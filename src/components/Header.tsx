import { useState } from "react";
import { useCart } from "../context/cart-context";
import { useWishList } from "../context/wishlist-context";
import "../css/Header.css";

const Header = () => {
  const totalItemsInCart = () => {
    let totalItems = 0;
    itemsInCart.map((item: any) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  const [route, setRoute] = useState("products");
  const { itemsInCart } = useCart();
  const { itemsInWishList } = useWishList();
  return (
    <div className="header">
      <div className="navigation__bar">
        <div className="logo">BlackHole</div>
        <div className="navigation-link__men">MEN</div>
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
        <span>Wishlist({itemsInWishList.length})</span>
        <span onClick={() => setRoute("cart")}>Bag({totalItemsInCart()}) </span>
      </div>
    </div>
  );
};

export default Header;
