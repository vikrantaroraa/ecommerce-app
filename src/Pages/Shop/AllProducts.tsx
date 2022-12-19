import ProductsList from "src/api/ProductsList";
import ProductCard from "src/components/ProductCard/ProductCard";
import { useCart } from "src/context/cart-and-wishlist-context";
import styles from "src/pages/Shop/AllProducts.module.css";
import { Link } from "react-router-dom";
import FilterCategoryCollapsibleComponent from "src/components/FilterCategoryCollapsibleComponent/FilterCategoryCollapsibleComponent";
import FilterRow from "src/components/FilterRow/FilterRow";
import SimilarProductsCard from "src/components/SimilarProductsCard/SimilarProductsCard";
import handm from "src/assets/images/handm.jpg";
import sortBy from "src/assets/svg/sortBy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import sortBy from "src/assets/svg/sortBy.svg";

const sortByOptions = [
  "Please select a value",
  "Best Seller",
  "Price: Low to High",
  "Price: High to Low",
  "New Arrival",
  "Popularity",
];

const AllProducts = () => {
  const { dispatch: productDispatch } = useCart();
  return (
    <div className={styles["all-products"]}>
      <div className={styles["product-category-info-and-sortby-container"]}>
        <div className={styles["product-category-info"]}>
          <hr className={styles["first-hr"]} />
          <span className={styles["product-category-heading"]}>
            Womenwear <span className={styles["number-of-items"]}>(11)</span>
          </span>
          <hr className={styles["second-hr"]} />
        </div>
        <div className={styles["sortby-container"]}>
          <div className={styles["sortby-heading-and-icon"]}>
            <img src={sortBy} alt="Sort By" />
            <span className={styles["sortby-heading"]}>Sort By</span>
          </div>
          <div className={styles["sortby-dropdown-container"]}>
            <select
              onChange={(e) => {
                console.log("from select", e.target.value);
              }}
              onMouseDown={(e) => {
                // e.preventDefault();
              }}
              className={styles["sortby-dropdown"]}
              name="sortBy"
              id="sortBy"
            >
              {sortByOptions.map((size) => (
                <option
                  onSelect={(e) => {
                    console.log(e.target);
                  }}
                  value={size}
                >
                  {size}
                </option>
              ))}
            </select>
            <div className={styles["hidden-div"]}>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>

          {/* {sortByOptions.map((option) => (
            <div>
              <input type="radio" name="sort" />
              <label>{option}</label>
            </div>
          ))} */}
        </div>
      </div>
      <div className={styles["product-filters-and-all-products-container"]}>
        <div className={styles["product-filters"]}>
          <div className={styles["filters-heading-and-reset-button"]}>
            <span className={styles["filters-heading"]}>Filters</span>
            <button className={styles["reset-button"]}>Reset</button>
          </div>
          <div className={styles["filter-container"]}>
            <FilterCategoryCollapsibleComponent title="Gender">
              <FilterRow filterName="Women" />
              <FilterRow filterName="Men" />
              <FilterRow filterName="Kids" />
              <FilterRow filterName="Unisex" />
            </FilterCategoryCollapsibleComponent>
          </div>
          <hr />
          <div className={styles["filter-container"]}>
            <FilterCategoryCollapsibleComponent title="Size">
              <FilterRow filterName="XS" />
              <FilterRow filterName="S" />
              <FilterRow filterName="M" />
              <FilterRow filterName="L" />
              <FilterRow filterName="XL" />
              <FilterRow filterName="XXL" />
            </FilterCategoryCollapsibleComponent>
          </div>
          <hr />
          <div className={styles["filter-container"]}>
            <FilterCategoryCollapsibleComponent title="Brand">
              <FilterRow filterName="Bewakoof" />
              <FilterRow filterName="Roadster" />
              <FilterRow filterName="Levi's" />
              <FilterRow filterName="Tommy Hilfiger" />
              <FilterRow filterName="Under Armour" />
              <FilterRow filterName="Bewakoof" />
            </FilterCategoryCollapsibleComponent>
          </div>
          <hr />
          <div className={styles["filter-container"]}>
            <FilterCategoryCollapsibleComponent title="Style">
              <FilterRow filterName="Sweatshirt" />
              <FilterRow filterName="Hoodies" />
              <FilterRow filterName="Tshirts" />
              <FilterRow filterName="Joggers" />
              <FilterRow filterName="Pyjama" />
              <FilterRow filterName="Shorts" />
            </FilterCategoryCollapsibleComponent>
          </div>
          <hr />
          <div className={styles["filter-container"]}>
            <FilterCategoryCollapsibleComponent title="Discount">
              <FilterRow filterName="10% or More" />
              <FilterRow filterName="20% or More" />
              <FilterRow filterName="30% or More" />
              <FilterRow filterName="40% or More" />
              <FilterRow filterName="50% or More" />
              <FilterRow filterName="60% or More" />
            </FilterCategoryCollapsibleComponent>
          </div>
          <hr />
          <div className={styles["filter-container"]}>
            <FilterCategoryCollapsibleComponent title="Delivery Time">
              <FilterRow filterName="1 Day" />
              <FilterRow filterName="7 Days" />
              <FilterRow filterName="15 Days" />
            </FilterCategoryCollapsibleComponent>
          </div>
        </div>
        <div className={styles["products-container"]}>
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
              // <ProductCard
              //   id={id}
              //   name={name}
              //   price={price}
              //   description={description}
              //   onAddToCartClick={() =>
              //     productDispatch({ type: "ADD_TO_CART", payload: product })
              //   }
              //   onAddToWishListClick={() =>
              //     productDispatch({
              //       type: "ADD_TO_WISHLIST",
              //       payload: product,
              //     })
              //   }
              // />
              // </Link>

              <div
                // style={{ margin: "30px 30px" }}
                style={{ margin: "30px 0px" }}
              >
                <SimilarProductsCard
                  brandName="Campus Sutra"
                  productName="Solid Olive Green Hoodie"
                  price={1499}
                  imageSrc={handm}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
