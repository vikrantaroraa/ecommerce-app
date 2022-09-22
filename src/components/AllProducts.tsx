import ProductCard from "./ProductCard/ProductCard";
import ProductsList from "./ProductCard/ProductsList";
import "../css/AllProducts.css";

const AllProducts = () => {
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
        {ProductsList.map(({ id, name, price, description }) => (
          <ProductCard
            id={id}
            name={name}
            price={price}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
