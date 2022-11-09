import styles from "src/components/ProductCard/ProductCard.module.css";
import { v4 as uuidv4 } from "uuid";
import { ProductCardProps } from "src/components/ProductCard/ProductCard.interface";

const ProductCard = ({
  id,
  name,
  price,
  description,
  onAddToCartClick,
  onAddToWishListClick,
}: ProductCardProps) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.card__body}>
        <img
          className={styles.card__image}
          src="data:image/jpeg;base64,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"
          alt="Jeans"
        />
        <div className={styles.product__name__and__heart}>
          <h2 className={styles.product__name}>{name}</h2>
          <div id="heart">
            <svg
              viewBox="0 0 512 512"
              width="1.4rem"
              stroke="black"
              fill="rgb(240, 223, 223)"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
          </div>
        </div>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__price}>
          <span className={styles.price}>Rs.{price}</span>
          <s className={styles.strike__through__price}>Rs.1099</s>
          <span className={styles.discount__percent}>( 45 % OFF )</span>
        </div>
        <button className={styles.card__button} onClick={onAddToCartClick}>
          Add to cart
        </button>
        <button className={styles.card__button} onClick={onAddToWishListClick}>
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
