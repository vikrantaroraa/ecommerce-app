import styles from "src/components/BillingComponent/BillingComponent.module.css";
import orderSavingsCheckmark from "src/assets/svg/orderSavingsCheckmark.svg";
import proceedToBuyArrow from "src/assets/svg/proceedToBuyArrow.svg";
import { useCart } from "src/context/cart-and-wishlist-context";
import { Link, useLocation } from "react-router-dom";

function BillingComponent() {
  const location = useLocation();
  const currentPage = location.pathname;
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

  const calculateCartDiscount = () => {
    let cartDiscount = 0;
    const cartTotal = calculateCartTotal();
    cartDiscount = 0.2 * cartTotal;
    return cartDiscount;
  };

  const calculateCouponDiscount = () => {
    let couponDiscount = 0;
    const cartTotal = calculateCartTotal();
    couponDiscount = 0.1 * cartTotal;
    return couponDiscount;
  };

  const CalculateSubTotalAfterDiscount = () => {
    let subTotalAfterDiscount =
      calculateCartTotal() -
      calculateCartDiscount() -
      calculateCouponDiscount();
    return subTotalAfterDiscount;
  };
  return (
    <div className={styles["billing-component"]}>
      <span className={styles["price-summary-heading"]}>Price Summary</span>
      <div className={styles["summary-data-row"]}>
        <span>
          Bag Total <span>({totalItemsInCart()} Items)</span>
        </span>
        <span>Rs. {calculateCartTotal()}</span>
      </div>
      <hr className={styles["hr-separator"]} />
      <div className={styles["coupon-code-applied-messsage-container"]}>
        <p>Hurray! Coupon code WELCOME10 applied </p>
      </div>
      <div className={styles["summary-data-row"]}>
        <span>Bag Discount</span>
        <span className={styles["discount-value"]}>
          - Rs. {calculateCartDiscount()}
        </span>
      </div>
      <div className={styles["summary-data-row"]}>
        <span>Coupon Discount</span>
        <span className={styles["discount-value"]}>
          - Rs. {calculateCouponDiscount()}
        </span>
      </div>
      <div className={styles["summary-data-row"]}>
        <span>Sub Total</span>
        <span>Rs. {CalculateSubTotalAfterDiscount()}</span>
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
        <p>
          Yayy! You are saving Rs.{" "}
          {calculateCartDiscount() + calculateCouponDiscount()} on this order{" "}
        </p>
      </div>
      <div className={`${styles["summary-data-row"]} ${styles["you-pay-row"]}`}>
        <span>You Pay</span>
        <span>Rs. {CalculateSubTotalAfterDiscount()}</span>
      </div>
      <button className={styles["proceed-to-buy-button"]}>
        {currentPage === "/cart" && (
          <Link
            to="/shipping"
            style={{
              textDecoration: "none",
              color: "#FFF",
            }}
          >
            {" "}
            Continue to Shipping
          </Link>
        )}
        {currentPage === "/shipping" && (
          <Link
            to="/shipping"
            style={{
              textDecoration: "none",
              color: "#FFF",
            }}
          >
            {" "}
            Continue to Checkout
          </Link>
        )}
        <span>
          <img src={proceedToBuyArrow} />
        </span>
      </button>
    </div>
  );
}

export default BillingComponent;
