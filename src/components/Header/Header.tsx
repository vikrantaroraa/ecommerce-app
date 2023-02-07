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
      <div className={styles["navigation-bar"]}>
        <div className={styles["logo"]}>BlackHole</div>
        <div className={styles["navigation-link-men"]}>
          <Link to="/">All Products</Link>
        </div>
        <div className={styles["navigation-link-women"]}>
          <Link to="/address">Address</Link>
        </div>
        <div className={styles["navigation-kids"]}>
          <Link to="/shipping">Shipping</Link>
        </div>
        <div className={styles["navigation-beauty"]}>BEAUTY</div>
        <div className={styles["navigation-decor"]}>DECOR</div>
      </div>
      <div className={styles["search-input"]}>
        <input placeholder="Search for products, brands and more" />
      </div>
      <div className={styles["header-actions"]}>
        {/* <span>Profile</span> */}
        <span>
          <Link to="/wishlist">Wishlist({wishlist.length})</Link>
        </span>
        <span>
          <Link to="/cart">Bag({totalItemsInCart()})</Link>
        </span>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
