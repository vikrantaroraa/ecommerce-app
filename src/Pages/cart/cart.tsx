import CartProduct from "../../components/CartProduct/CartProduct";
import { useCart } from "../../context/cart-context";
import { useWishList } from "../../context/wishlist-context";

export const Cart = () => {
  const increaseQuantity = (item: any) => {
    setItemsInCart(
      itemsInCart.map((element: any) =>
        item.id === element.id
          ? { ...element, quantity: element.quantity + 1 }
          : element
      )
    );
  };

  const decreaseQuantity = (item: any) => {
    setItemsInCart(
      itemsInCart.map((element: any) =>
        item.id === element.id
          ? { ...element, quantity: element.quantity - 1 }
          : element
      )
    );
  };

  const moveItemToWishList = (item: any) => {
    setItemsInWishList((items: any) => [...items, item]);
    setItemsInCart(
      itemsInCart.filter((element: any) => element.id !== item.id)
    );
  };

  const removeItemFromCart = (item: any) => {
    setItemsInCart(
      itemsInCart.filter((element: any) => element.id !== item.id)
    );
  };

  const calculateCartTotal = () => {
    let cartTotal = 0;
    itemsInCart.map((item: any) => {
      cartTotal += item.quantity * item.price;
    });
    return cartTotal;
  };

  const { itemsInCart, setItemsInCart } = useCart();
  const { setItemsInWishList } = useWishList();

  return (
    <div>
      <h1>cart</h1>
      <h1>Cart Total: {calculateCartTotal()}</h1>
      {itemsInCart.map((item: any) => {
        return (
          <CartProduct
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncreaseQuantityClick={() => increaseQuantity(item)}
            onDecreaseQuantityClick={() => decreaseQuantity(item)}
            onRemoveFromCartClick={() => removeItemFromCart(item)}
            onMoveToWishlistClick={() => moveItemToWishList(item)}
          />
        );
      })}
    </div>
  );
};
