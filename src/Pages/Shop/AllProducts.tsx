import ProductsList from "src/api/ProductsList";
import ProductCard from "src/components/ProductCard/ProductCard";
import { useCart } from "src/context/cart-and-wishlist-context";
import "src/pages/Shop/AllProducts.css";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { dispatch: productDispatch } = useCart();

  return (
    <div className="all__products">
      <div className="products__filter">
        <div className="categories__filter">
          <div className="filter__type">CATEGORIES</div>
          <br />
          <span>THIS IS A SPAN TEXT DIV-1</span>
        </div>
        <div className="brand__filter">BRANDDDDD</div>
        <div className="price__filter">PRICE</div>
        <div className="discount__filter">DISCOUNT</div>
      </div>
      <div className="products__container">
        {ProductsList.map((product) => {
          const { id, name, price, description } = product;
          return (
            // <Link
            //   to={`/product/${product.id}`}
            //   style={{
            //     textDecoration: "none",
            //     color: "#000",
            //   }}
            // >
            <ProductCard
              id={id}
              name={name}
              price={price}
              description={description}
              onAddToCartClick={() =>
                productDispatch({ type: "ADD_TO_CART", payload: product })
              }
              onAddToWishListClick={() =>
                productDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: product,
                })
              }
            />
            // </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
