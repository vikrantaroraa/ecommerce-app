import WishListProductCard from "src/components/WishListProductCard/WishListProductCard";
import { useCart } from "src/context/cart-and-wishlist-context";
import styles from "src/pages/Wishlist/Wishlist.module.css";

const Wishlist = () => {
  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useCart();

  return (
    <div className={styles["wishlist"]}>
      <div className={styles["wishlist-heading"]}>
        Wishlist{" "}
        <span className={styles["number-of-items-text"]}>
          {wishlist.length} item(s)
        </span>
      </div>
      <div className={styles["wishlist-products-container"]}>
        {wishlist.map((item: any) => {
          return (
            <WishListProductCard
              id={item.id}
              productName={item.name}
              price={item.price}
              brandName={item.brand}
              actualPrice={item.actualPrice}
              imageSrc={item.images[1]}
              onRemoveFromWishListClick={() =>
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: item.id,
                })
              }
              onMoveToCartClick={() =>
                wishlistDispatch({ type: "MOVE_TO_CART", payload: item })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
