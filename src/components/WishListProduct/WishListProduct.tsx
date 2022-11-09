import { WishListProductProps } from "src/components/WishListProduct/WishListProduct.interface";
import "src/components/WishListProduct/WishListProduct.css";

const WishListProduct = ({
  id,
  name,
  price,
  quantity,
  imageSrc = "https://images.bewakoof.com/t1080/men-s-blue-t-shirt-1092-1655748102-1.jpg",
  onRemoveFromWishListClick,
  onMoveToCartClick,
}: WishListProductProps) => {
  return (
    <div className="cart__product" key={id} style={{ height: "auto" }}>
      <div className="product__data__and__image">
        <div className="product__data">
          <div className="product__name">{name}</div>
          <strong className="product__price">Rs. {price}</strong>
          <div className="increase__and__decrese__btn">
            {/* <button className="increase__qty" onClick={onIncreaseQuantityClick}>
              +
            </button> */}
            {/* <strong className="product__quantity">{quantity}</strong> */}
            {/* <button className="decrease__qty" onClick={onDecreaseQuantityClick}>
              -
            </button> */}
          </div>
        </div>
        <div className="product__image">
          <img src={imageSrc} alt={name} />
        </div>
      </div>
      <div className="remove__and__wishlist__button">
        <button
          className="remove__btn"
          onClick={onRemoveFromWishListClick}
          style={{ padding: "12px" }}
        >
          Remove
        </button>
        <button className="wishlist__btn" onClick={onMoveToCartClick}>
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export default WishListProduct;
