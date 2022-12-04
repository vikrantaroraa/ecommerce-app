import BillingComponent from "src/components/BillingComponent/BillingComponent";
import CartProduct from "src/components/CartProduct/CartProduct";
import bookmarkIcon from "src/assets/svg/bookmarkIcon.svg";
import { useCart } from "src/context/cart-and-wishlist-context";
import styles from "src/pages/Cart/Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const {
    state: { cart },
    dispatch: cartDispatch,
  } = useCart();

  const calculateCartTotal = () => {
    let cartTotal = 0;
    cart.map((item: any) => {
      cartTotal += item.quantity * item.price;
    });
    return cartTotal;
  };

  const totalItemsInCart = () => {
    let totalItems = 0;
    cart.map((item: any) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  return (
    <div className={styles["cart"]}>
      <div className={styles["cart-products-container"]}>
        <div className={styles["bag-heading"]}>
          My Bag{" "}
          <span className={styles["number-of-items-text"]}>
            {totalItemsInCart()} item(s)
          </span>
        </div>
        {/* <h1>Cart Total: {calculateCartTotal()}</h1> */}
        {cart.map((item: any) => {
          return (
            <CartProduct
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onIncreaseQuantityClick={() =>
                cartDispatch({ type: "INCREASE_QUANTITY", payload: item.id })
              }
              onDecreaseQuantityClick={() =>
                cartDispatch({ type: "DECREASE_QUANTITY", payload: item.id })
              }
              onRemoveFromCartClick={() =>
                cartDispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
              onMoveToWishlistClick={() =>
                cartDispatch({ type: "MOVE_TO_WISHLIST", payload: item })
              }
            />
          );
        })}
        <div className={styles["add-more-items-div-container"]}>
          <div className={styles["text-and-bookmark-icon-container"]}>
            <img src={bookmarkIcon} alt="add more icon" />
            <p>
              {totalItemsInCart() === 0
                ? "Add items from wishlist"
                : "Add more from wishlist"}
            </p>
          </div>
          <div className={styles["right-chevron-container"]}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
      <div className={styles["bill-description"]}>
        <BillingComponent />
      </div>
    </div>
  );
};

export default Cart;
