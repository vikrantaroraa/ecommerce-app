import ProductsList from "src/api/ProductsList";
import ProductCard from "src/components/ProductCard/ProductCard";
import { useCart } from "src/context/cart-and-wishlist-context";
import styles from "src/pages/Shop/AllProducts.module.css";
import { Link, useSearchParams } from "react-router-dom";
import FilterCategoryCollapsibleComponent from "src/components/FilterCategoryCollapsibleComponent/FilterCategoryCollapsibleComponent";
import FilterRow from "src/components/FilterRow/FilterRow";
import SimilarProductsCard from "src/components/SimilarProductsCard/SimilarProductsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { allProducts } from "src/api/all-products";
import sortBy from "src/assets/svg/sortBy.jpg";
import {
  checkboxFilterNames,
  checkboxFiltersList,
  FilterObject,
} from "src/context/sort-and-filter-store/checkboxFiltersList";
import { useSortAndFilter } from "src/context/sort-and-filter-store/sort-and-filter-context";
import PriceFilterComponent from "src/components/PriceFilterComponent/PriceFilterComponent";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const { dispatch: productDispatch } = useCart();
  const { state, dispatch: sortAndFilterDispatch } = useSortAndFilter();
  const {
    originalDataList,
    showMenProducts,
    showWomenProducts,
    showExtraSmallSize,
    showSmallSize,
    showMediumSize,
    showLargeSize,
    showExtraLargeSize,
    show2ExtraLargeSize,
    show3ExtraLargeSize,
    showBewakoofProducts,
    showRoadsterProducts,
    showLevisProducts,
    showTommyHilfigerProducts,
    showUnderArmourProducts,
    showSweatShirts,
    showHoodies,
    showTshirts,
    showJoggers,
    showPyjamas,
    showShorts,
    showBoxers,
    show10PercentDiscountProducts,
    show20PercentDiscountProducts,
    show30PercentDiscountProducts,
    show40PercentDiscountProducts,
    show50PercentDiscountProducts,
    show1DayDeliveryProducts,
    show7DaysDeliveryProducts,
    show15DaysDeliveryProducts,
    priceRange,
  } = state;

  const getFilteredData = (
    productsUnderPriceRange: typeof allProducts,
    {
      showMenProducts,
      showWomenProducts,
      showExtraSmallSize,
      showSmallSize,
      showMediumSize,
      showLargeSize,
      showExtraLargeSize,
      show2ExtraLargeSize,
      show3ExtraLargeSize,
      showBewakoofProducts,
      showRoadsterProducts,
      showLevisProducts,
      showTommyHilfigerProducts,
      showUnderArmourProducts,
      showSweatShirts,
      showHoodies,
      showTshirts,
      showJoggers,
      showPyjamas,
      showShorts,
      showBoxers,
      show10PercentDiscountProducts,
      show20PercentDiscountProducts,
      show30PercentDiscountProducts,
      show40PercentDiscountProducts,
      show50PercentDiscountProducts,
      show1DayDeliveryProducts,
      show7DaysDeliveryProducts,
      show15DaysDeliveryProducts,
    }: any
  ) => {
    return productsUnderPriceRange
      .filter(({ gender }: any) => (showMenProducts ? gender === "Men" : true))
      .filter(({ gender }) => (showWomenProducts ? gender === "Women" : true))
      .filter(({ sizesAvailable }) =>
        showExtraSmallSize ? sizesAvailable.includes("XS") : true
      )
      .filter(({ sizesAvailable }) =>
        showSmallSize ? sizesAvailable.includes("S") : true
      )
      .filter(({ sizesAvailable }) =>
        showMediumSize ? sizesAvailable.includes("M") : true
      )
      .filter(({ sizesAvailable }) =>
        showLargeSize ? sizesAvailable.includes("L") : true
      )
      .filter(({ sizesAvailable }) =>
        showExtraLargeSize ? sizesAvailable.includes("XL") : true
      )
      .filter(({ sizesAvailable }) =>
        show2ExtraLargeSize ? sizesAvailable.includes("2XL") : true
      )
      .filter(({ sizesAvailable }) =>
        show3ExtraLargeSize ? sizesAvailable.includes("3XL") : true
      )
      .filter(({ brand }) =>
        showBewakoofProducts ? brand === "Bewakoof" : true
      )
      .filter(({ brand }) =>
        showRoadsterProducts ? brand === "Roadster" : true
      )
      .filter(({ brand }) => (showLevisProducts ? brand === "Levi's" : true))
      .filter(({ brand }) =>
        showTommyHilfigerProducts ? brand === "Tommy Hilfiger" : true
      )
      .filter(({ brand }) =>
        showUnderArmourProducts ? brand === "Under Armour" : true
      )
      .filter(({ category }) =>
        showSweatShirts ? category === "Sweatshirt" : true
      )
      .filter(({ category }) => (showHoodies ? category === "Hoodie" : true))
      .filter(({ category }) => (showTshirts ? category === "Tshirt" : true))
      .filter(({ category }) => (showJoggers ? category === "Joggers" : true))
      .filter(({ category }) => (showPyjamas ? category === "Pyjama" : true))
      .filter(({ category }) => (showShorts ? category === "Shorts" : true))
      .filter(({ category }) => (showBoxers ? category === "Boxers" : true))
      .filter(({ discount }) =>
        show10PercentDiscountProducts ? Number(discount) >= 10 : true
      )
      .filter(({ discount }) =>
        show20PercentDiscountProducts ? Number(discount) >= 20 : true
      )
      .filter(({ discount }) =>
        show30PercentDiscountProducts ? Number(discount) >= 30 : true
      )
      .filter(({ discount }) =>
        show40PercentDiscountProducts ? Number(discount) >= 40 : true
      )
      .filter(({ discount }) =>
        show50PercentDiscountProducts ? Number(discount) >= 50 : true
      )
      .filter(({ deliveryTime }: any) =>
        show1DayDeliveryProducts ? Number(deliveryTime) <= 1 : true
      )
      .filter(({ deliveryTime }: any) =>
        show7DaysDeliveryProducts ? Number(deliveryTime) <= 7 : true
      )
      .filter(({ deliveryTime }: any) =>
        show15DaysDeliveryProducts ? Number(deliveryTime) <= 15 : true
      );
  };

  const getProductsUnderPriceRange = (
    originalDataList: typeof allProducts,
    priceRange: number
  ) => {
    if (priceRange) {
      return originalDataList.filter(
        ({ price }: any) => Number(price) <= priceRange
      );
    }

    return originalDataList;
  };

  const productsUnderPriceRange = getProductsUnderPriceRange(
    originalDataList,
    priceRange
  );

  const filteredData = getFilteredData(productsUnderPriceRange, {
    showMenProducts,
    showWomenProducts,
    showExtraSmallSize,
    showSmallSize,
    showMediumSize,
    showLargeSize,
    showExtraLargeSize,
    show2ExtraLargeSize,
    show3ExtraLargeSize,
    showBewakoofProducts,
    showRoadsterProducts,
    showLevisProducts,
    showTommyHilfigerProducts,
    showUnderArmourProducts,
    showSweatShirts,
    showHoodies,
    showTshirts,
    showJoggers,
    showPyjamas,
    showShorts,
    showBoxers,
    show10PercentDiscountProducts,
    show20PercentDiscountProducts,
    show30PercentDiscountProducts,
    show40PercentDiscountProducts,
    show50PercentDiscountProducts,
    show1DayDeliveryProducts,
    show7DaysDeliveryProducts,
    show15DaysDeliveryProducts,
  });

  const handleCheckboxFilterClick = (event: any) => {
    const { name, value } = event.currentTarget;
    // console.log({ name }, { value });
    const currentSearchParams = new URLSearchParams(searchParams);
    // console.log(
    //   "currentSearchParams to string:",
    //   currentSearchParams.toString()
    // );
    const allAppliedFilters = currentSearchParams.getAll(name);
    // console.log({ allAppliedFilters });

    if (allAppliedFilters.includes(value)) {
      const newFiltersArray = allAppliedFilters.filter(
        (filterValue) => filterValue !== value
      );
      const newFiltersArrayLength = newFiltersArray.length;
      // console.log({ newFiltersArray });
      // console.log({ newFiltersArrayLength });
      currentSearchParams.delete(name);
      for (let i = 0; i < newFiltersArrayLength; i++) {
        currentSearchParams.append(name, newFiltersArray[i]);
      }
      setSearchParams(currentSearchParams);
    } else {
      // console.log("from else");
      currentSearchParams.append(name, value);
      setSearchParams(currentSearchParams);
    }
  };

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
        </div>
      </div>
      <div className={styles["product-filters-and-all-products-container"]}>
        <div className={styles["product-filters"]}>
          <div className={styles["filters-heading-and-reset-button"]}>
            <span className={styles["filters-heading"]}>Filters</span>
            <button className={styles["reset-button"]}>Reset</button>
          </div>
          <>
            <div className={styles["filter-container"]}>
              <FilterCategoryCollapsibleComponent title="Price">
                <PriceFilterComponent
                  filterName="max-price"
                  filterValue={priceRange}
                  onPriceFilterChange={(event) => {
                    console.log("Price value: ", event.target.value);
                    sortAndFilterDispatch({
                      type: "CHANGE_PRICE_RANGE",
                      payload: event.target.value,
                    });
                  }}
                />
              </FilterCategoryCollapsibleComponent>
            </div>
            <hr />
            {checkboxFilterNames.map((filterName) => {
              return (
                <>
                  <div className={styles["filter-container"]}>
                    <FilterCategoryCollapsibleComponent title={filterName}>
                      {checkboxFiltersList[
                        filterName as keyof typeof checkboxFiltersList
                      ].map(
                        ({
                          filterLabel,
                          urlParameter,
                          statVariableName,
                          dispatchAction,
                        }: FilterObject) => {
                          const isChecked = state[statVariableName];
                          // const filterNameNew = "filter";
                          return (
                            <FilterRow
                              filterLabel={filterLabel}
                              filterName={filterName}
                              filterUrlParameter={urlParameter}
                              onFilterRowClick={(event) => {
                                sortAndFilterDispatch({
                                  type: `${dispatchAction}`,
                                });
                                handleCheckboxFilterClick(event);
                              }}
                              isChecked={isChecked}
                            />
                          );
                        }
                      )}
                    </FilterCategoryCollapsibleComponent>
                  </div>
                  <hr />
                </>
              );
            })}
          </>
        </div>
        <div className={styles["products-container"]}>
          {filteredData.map((product: any) => {
            const { id, name, price, description, images } = product;
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

              <Link
                to={`/product/${product.id}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <div
                  // style={{ margin: "30px 30px" }}
                  style={{ margin: "30px 0px", cursor: "pointer" }}
                >
                  <SimilarProductsCard
                    brandName="Campus Sutra"
                    productName="Solid Olive Green Hoodie"
                    price={price}
                    imageSrc={images[1]}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
