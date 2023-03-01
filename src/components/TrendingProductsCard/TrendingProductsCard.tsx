import { TrendingProductsCardProps } from "src/components/TrendingProductsCard/TrendingProductsCard.interface";
import styles from "src/components/TrendingProductsCard/TrendingProductsCard.module.css";

function TrendingProductsCard({
  imageSrc,
  productCategory,
  productName,
  price,
  actualPrice,
}: TrendingProductsCardProps) {
  return (
    <div className={styles["trending-product-card"]}>
      <div className={styles["product-image"]}>
        <img src={imageSrc} alt={productName} />
      </div>
      <div className={styles["product-details"]}>
        <div className={styles["product-category"]}>{productCategory}</div>
        <div className={styles["product-name"]}>{productName}</div>
        <div className={styles["price-and-discount"]}>
          <span className={styles["price"]}>₹ {price}</span>
          <s className={styles["actual-price"]}>₹ {actualPrice}</s>
        </div>
      </div>
    </div>
  );
}

export default TrendingProductsCard;
