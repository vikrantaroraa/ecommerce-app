import ProductsList from "../../components/ProductCard/ProductsList";
import ProductCard from "../../components/ProductCard/ProductCard";
import "../shop/products.css";
import { useCart } from "../../context/cart-context";
import { useWishList } from "../../context/wishlist-context";

const Products = () => {
  const addToCart = (product: any) => {
    const itemIndex = itemsInCart.findIndex(
      (item: any) => item.id === product.id
    );
    console.log({ itemIndex });
    if (itemIndex === -1) {
      return setItemsInCart((items: any) => [
        ...items,
        { ...product, quantity: 1 },
      ]);
    }
    return setItemsInCart(
      itemsInCart.map((item: any) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const moveItemToWishList = (product: any) => {
    setItemsInWishList((items: any) => [...items, product]);
  };

  const { setItemsInCart, itemsInCart } = useCart();
  const { setItemsInWishList } = useWishList();
  return (
    <div className="all__products">
      {/* <div className=""></div> */}
      <div className="products__filter">
        <div className="categories__filter">
          <div className="filter__type">CATEGORIES</div>
          <br />
          <span>THIS IS A SPAN TEXT DIV-1</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-2</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-3</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-4</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-5</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-6</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-7</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-8</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-9</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-10</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-11</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-12</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-9</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-10</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-11</span>
          <br />
          <span>THIS IS A SPAN TEXT DIV-12</span>
          <br />
        </div>
        <div className="brand__filter">BRAND</div>
        <div className="price__filter">PRICE</div>
        <div className="discount__filter">DISCOUNT</div>
        {/* <div className="price__filter">PRICE</div> */}
      </div>
      <div className="products__container">
        {/* <p>Items In Cart: {itemsInCart}</p> */}
        {ProductsList.map((product) => (
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            // onClick={() =>
            //   setItemsInCart((items: any) => [
            //     ...items,
            //     { ...product, quantity: 1 },
            //   ])
            // }
            onAddToCartClick={() => addToCart(product)}
            onAddToWishListClick={() => moveItemToWishList(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
