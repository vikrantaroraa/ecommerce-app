import WishListProduct from "src/components/WishListProduct/WishListProduct";
import { useCart } from "src/context/cart-and-wishlist-context";
// import styles from "src/pages/Wishlist/Wishlist.module.css";

const Wishlist = () => {
  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useCart();

  return (
    <div
      style={{ width: "50vw", backgroundColor: "transparent", padding: "40px" }}
    >
      <h1>Wishlist</h1>
      {wishlist.map((item: any) => {
        return (
          <WishListProduct
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
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
  );
};

export default Wishlist;
