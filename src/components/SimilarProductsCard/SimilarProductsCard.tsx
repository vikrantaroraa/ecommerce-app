import { SimilarProductsCardProps } from "src/components/SimilarProductsCard/SimilarProductsCard.interface";
import styles from "src/components/SimilarProductsCard/SimilarProductsCard.module.css";

function SimilarProductsCard({
  imageSrc,
  brandName,
  productName,
  price,
  actualPrice,
  discount,
  introduced_on,
}: SimilarProductsCardProps) {
  return (
    <div className={styles["similar-product-card"]}>
      <div className={styles["product-image"]}>
        <img src={imageSrc} alt={productName} />
      </div>
      <div className={styles["brand-name"]}>{brandName}</div>
      <div className={styles["product-name"]}>{productName}</div>
      <div className={styles["price-and-discount"]}>
        <span className={styles["price"]}>₹ {price}</span>
        {/* <s className={styles["actual-price"]}>₹ 5500</s>
        <span className={styles["discount"]}>45 % off</span> */}
        <span>Reviews: {introduced_on}</span>
      </div>
    </div>
  );
}

export default SimilarProductsCard;
