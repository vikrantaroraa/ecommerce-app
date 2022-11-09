import CartProduct from "src/components/CartProduct/CartProduct";
import { useCart } from "src/context/cart-and-wishlist-context";

const Cart = () => {
  const {
    state: { cart },
    dispatch: cartDispatch,
  } = useCart();

  const calculateCartTotal = () => {
    let cartTotal = 0;
    cart.map((item: any) => {
      cartTotal += item.quantity * item.price;
    });
    return cartTotal;
  };

  return (
    <div>
      <h1>cart</h1>
      <h1>Cart Total: {calculateCartTotal()}</h1>
      {cart.map((item: any) => {
        return (
          <CartProduct
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncreaseQuantityClick={() =>
              cartDispatch({ type: "INCREASE_QUANTITY", payload: item.id })
            }
            onDecreaseQuantityClick={() =>
              cartDispatch({ type: "DECREASE_QUANTITY", payload: item.id })
            }
            onRemoveFromCartClick={() =>
              cartDispatch({ type: "REMOVE_FROM_CART", payload: item.id })
            }
            onMoveToWishlistClick={() =>
              cartDispatch({ type: "MOVE_TO_WISHLIST", payload: item })
            }
          />
        );
      })}
    </div>
  );
};

export default Cart;
