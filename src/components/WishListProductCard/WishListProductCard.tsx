import { WishListProductCardProps } from "src/components/WishListProductCard/WishListProductCard.interface";
import styles from "src/components/WishListProductCard/WishListProductCard.module.css";

const WishListProductCard = ({
  id,
  productName,
  brandName,
  price,
  actualPrice,
  imageSrc = "https://images.bewakoof.com/t1080/men-s-blue-t-shirt-1092-1655748102-1.jpg",
  onRemoveFromWishListClick,
  onMoveToCartClick,
}: WishListProductCardProps) => {
  return (
    <div className={styles["wishlist-product-card"]} key={id}>
      <div className={styles["product-image"]}>
        <img src={imageSrc} alt={productName} />
      </div>
      <div className={styles["item-details-and-button-container"]}>
        <div className={styles["brand-name"]}>{brandName}</div>
        <div className={styles["product-name"]}>{productName}</div>
        {/* <div className={styles["price-and-discount"]}>
          <span className={styles["price"]}>₹ {price}</span>
          <s className={styles["actual-price"]}>₹ {actualPrice}</s>
        </div> */}
      </div>
      <div className={styles["remove-and-wishlist-button"]}>
        <button
          className={styles["remove-btn"]}
          onClick={onRemoveFromWishListClick}
        >
          Remove
        </button>
        <button className={styles["wishlist-btn"]} onClick={onMoveToCartClick}>
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export default WishListProductCard;
