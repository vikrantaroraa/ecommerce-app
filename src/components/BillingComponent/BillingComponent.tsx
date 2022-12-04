import styles from "src/components/BillingComponent/BillingComponent.module.css";
import orderSavingsCheckmark from "src/assets/svg/orderSavingsCheckmark.svg";
import proceedToBuyArrow from "src/assets/svg/proceedToBuyArrow.svg";
import { useCart } from "src/context/cart-and-wishlist-context";

function BillingComponent() {
  const {
    state: { cart },
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
    <div className={styles["billing-component"]}>
      <span className={styles["price-summary-heading"]}>Price Summary</span>
      <div className={styles["summary-data-row"]}>
        <span>
          Bag Total <span>({totalItemsInCart()} Items)</span>
        </span>
        <span>{calculateCartTotal()}</span>
      </div>
      <hr className={styles["hr-separator"]} />
      <div className={styles["coupon-code-applied-messsage-container"]}>
        <p>Hurray! Coupon code WELCOME50 applied </p>
      </div>
      <div className={styles["summary-data-row"]}>
        <span>Bag Discount</span>
        <span className={styles["discount-value"]}>- Rs. 6000</span>
      </div>
      <div className={styles["summary-data-row"]}>
        <span>Coupon Discount</span>
        <span className={styles["discount-value"]}>- Rs. 1000</span>
      </div>
      <div className={styles["summary-data-row"]}>
        <span>Sub Total</span>
        <span>Rs. 5000</span>
      </div>
      <div className={styles["summary-data-row"]}>
        <span>Shipping Charge</span>
        <span>Free</span>
      </div>
      <hr className={styles["hr-separator"]} />
      <div className={styles["total-savings-messsage-container"]}>
        <span>
          <img src={orderSavingsCheckmark} alt="Order Savings Checkmark" />
        </span>
        <p>Yayy! You are saving ₹7000 on this order </p>
      </div>
      <div className={`${styles["summary-data-row"]} ${styles["you-pay-row"]}`}>
        <span>You Pay</span>
        <span>Rs. 1000</span>
      </div>
      <button className={styles["proceed-to-buy-button"]}>
        Proceed to Buy
        <span>
          <img src={proceedToBuyArrow} />
        </span>
      </button>
    </div>
  );
}

export default BillingComponent;
