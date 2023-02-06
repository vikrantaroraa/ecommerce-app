import { ShopByCategoryCardProps } from "src/components/ShopByCategoryCard/ShopByCategoryCard.interface";
import styles from "src/components/ShopByCategoryCard/ShopByCategoryCard.module.css";

function ShopByCategoryCard({
  categoryName,
  imageUrl,
}: ShopByCategoryCardProps) {
  return (
    <div className={styles["shop-by-category-card"]}>
      <div className={styles["hero-category-image-container"]}>
        <img src={imageUrl} />
      </div>
      <div className={styles["category-name"]}>{categoryName}</div>
    </div>
  );
}

export default ShopByCategoryCard;
