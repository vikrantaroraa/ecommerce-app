import { CartProductProps } from "src/components/CartProduct/CartProduct.interface";
import styles from "src/components/CartProduct/CartProduct.module.css";
import deliveryCar from "src/assets/svg/deliveryCar.svg";
import trashBin from "src/assets/svg/trashBin.svg";
import movetoWishlistHeart from "src/assets/svg/movetoWishlistHeart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const sizeOptions = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

const CartProduct = ({
  id,
  name,
  price,
  quantity,
  imageSrc = "https://images.bewakoof.com/t1080/men-s-blue-t-shirt-1092-1655748102-1.jpg",
  onRemoveFromCartClick,
  onMoveToWishlistClick,
  onIncreaseQuantityClick,
  onDecreaseQuantityClick,
}: CartProductProps) => {
  return (
    // {styles[]}
    <div className={styles["cart-product"]} key={id}>
      <div className={styles["product-data-and-image"]}>
        <div className={styles["product-data"]}>
          <div className={styles["product-name-and-delivery-date"]}>
            <div className={styles["product-category-and-type"]}>
              Nike Winterwears
            </div>
            <div className={styles["product-name"]}>
              {/* {name} */}
              Men’s Solid Black Slim-fit Hoodie
            </div>
            <div className={styles["delivery-info"]}>
              <img src={deliveryCar} alt="delivery car icon" />
              Delivery by <b>21st Sept</b>
            </div>
          </div>

          <div className={styles["size-and-qty-container"]}>
            <div className={styles["select-size"]}>
              <label htmlFor="size" className={styles["size-heading"]}>
                Size:{" "}
              </label>
              <select name="size" id="size" className={styles["size-value"]}>
                {sizeOptions.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className={styles["qty-heading-and-buttons-container"]}>
              <span className={styles["quantity-heading"]}>Qty:</span>
              <div className={styles["increase-and-decrese-btn"]}>
                <button
                  className={styles["decrease-qty"]}
                  onClick={onDecreaseQuantityClick}
                >
                  -
                </button>
                <strong className={styles["product-quantity"]}>
                  {quantity}
                </strong>
                <button
                  className={styles["increase-qty"]}
                  onClick={onIncreaseQuantityClick}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <span className={styles["hurry-text"]}>Hurry! Only 2 Left!</span>
          <div className={styles["price-and-discount"]}>
            <span className={styles["price"]}>₹ 4500</span>
            <s className={styles["actual-price"]}>₹ 5500</s>
            <span className={styles["discount"]}>45 % off</span>
          </div>
        </div>
        <div className={styles["product-image"]}>
          <div className={styles["image-container"]}>
            <img src={imageSrc} alt={name} />
          </div>
        </div>
      </div>
      <div className={styles["remove-and-wishlist-button"]}>
        <button
          className={styles["remove-btn"]}
          onClick={onRemoveFromCartClick}
        >
          <img src={trashBin} alt="Remove Icon" />
          Remove
        </button>
        <button
          className={styles["wishlist-btn"]}
          onClick={onMoveToWishlistClick}
        >
          <img src={movetoWishlistHeart} alt="Remove Icon" />
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
