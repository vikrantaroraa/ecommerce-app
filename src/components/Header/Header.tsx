import { useCart } from "src/context/cart-and-wishlist-context";
import { Link } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import styles from "src/components/Header/Header.module.css";

const Header = () => {
  const {
    state: { cart, wishlist },
  } = useCart();

  const { logoutUser } = useAuth();

  const totalItemsInCart = () => {
    let totalItems = 0;
    cart.map((item: any) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["app-name-and-main-navigation-menu"]}>
        <div className={styles["app-name"]}>
          <Link to="/">BlackHole</Link>
        </div>
        <div className={styles["navigation-link"]}>
          <Link to="/all-products">All Products</Link>
        </div>
        <div className={styles["navigation-link"]}>
          <Link to="/address">Address</Link>
        </div>
        <div className={styles["navigation-link"]}>
          <Link to="/shipping">Shipping</Link>
        </div>
        <div className={styles["navigation-link"]}>Beauty</div>
        <div className={styles["navigation-link"]}>Decor</div>
      </div>
      <div className={styles["search-input-container"]}>
        <input placeholder="Search for products, brands and more" />
      </div>
      <div className={styles["wishlist-cart-signin-button-container"]}>
        {/* <span>Profile</span> */}
        <span className={styles["wishlist-button"]}>
          <Link to="/wishlist">Wishlist({wishlist.length})</Link>
        </span>
        <span className={styles["cart-button"]}>
          <Link to="/cart">Bag({totalItemsInCart()})</Link>
        </span>
        <button className={styles["signin-button"]} onClick={logoutUser}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
