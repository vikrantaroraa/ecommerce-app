import { CartProductProps } from "src/components/CartProduct/CartProduct.interface";
import "src/components/CartProduct/CartProduct.css";

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
    <div className="cart__product" key={id}>
      <div className="product__data__and__image">
        <div className="product__data">
          <div className="product__name">{name}</div>
          <strong className="product__price">Rs. {price}</strong>
          <div className="increase__and__decrese__btn">
            <button className="increase__qty" onClick={onIncreaseQuantityClick}>
              +
            </button>
            <strong className="product__quantity">{quantity}</strong>
            <button className="decrease__qty" onClick={onDecreaseQuantityClick}>
              -
            </button>
          </div>
        </div>
        <div className="product__image">
          <img src={imageSrc} alt={name} />
        </div>
      </div>
      <div className="remove__and__wishlist__button">
        <button className="remove__btn" onClick={onRemoveFromCartClick}>
          Remove
        </button>
        <button className="wishlist__btn" onClick={onMoveToWishlistClick}>
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
