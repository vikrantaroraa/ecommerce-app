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
import sortByIcon from "src/assets/svg/sortByIcon.jpg";
import {
  checkboxFilterNames,
  checkboxFiltersList,
  FilterObject,
  sortByOptions,
} from "src/context/sort-and-filter-store/checkboxFiltersList";
import { useSortAndFilter } from "src/context/sort-and-filter-store/sort-and-filter-context";
import PriceFilterComponent from "src/components/PriceFilterComponent/PriceFilterComponent";
import React, { useEffect } from "react";
// import sortBy from "src/assets/svg/sortBy.svg";

const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const { dispatch: productDispatch } = useCart();
  const { state, dispatch: sortAndFilterDispatch } = useSortAndFilter();

  const allStateVariablesArray = Object.keys(state);
  const indexOfOriginalDataList =
    allStateVariablesArray.indexOf("originalDataList");
  allStateVariablesArray.splice(indexOfOriginalDataList, 1);
  const indexOfSortBy = allStateVariablesArray.indexOf("sortBy");
  allStateVariablesArray.splice(indexOfSortBy, 1);
  const indexOfPriceRange = allStateVariablesArray.indexOf("priceRange");
  allStateVariablesArray.splice(indexOfPriceRange, 1);
  const allFiltersStateVariableArray = [...allStateVariablesArray];

  const stateVariableToFilteredProductsArray = {
    showMenProducts: "filteredMenProducts",
    showWomenProducts: "filteredWomenProducts",
    showExtraSmallSize: "filteredXSSizeProducts",
    showSmallSize: "filteredSSizeProducts",
    showMediumSize: "filteredMSizeProducts",
    showLargeSize: "filteredLSizeProducts",
    showExtraLargeSize: "filteredXLSizeProducts",
    show2ExtraLargeSize: "filtered2XLSizeProducts",
    show3ExtraLargeSize: "filtered3XLSizeProducts",
    showBewakoofProducts: "filteredBewakoofProducts",
    showRoadsterProducts: "filteredRoadsterProducts",
    showLevisProducts: "filteredLevisProducts",
    showTommyHilfigerProducts: "filteredTommyHilfigerProducts",
    showUnderArmourProducts: "filteredUnderArmourProducts",
    showSweatShirts: "filteredSweatshirtProducts",
    showHoodies: "filteredHoodieProducts",
    showTshirts: "filteredTshirtProducts",
    showJoggers: "filteredJoggersProducts",
    showPyjamas: "filteredPyjamaProducts",
    showShorts: "filteredShortsProducts",
    showBoxers: "filteredBoxersProducts",
    show10PercentDiscountProducts: "filtered10PercentDiscountProducts",
    show20PercentDiscountProducts: "filtered20PercentDiscountProducts",
    show30PercentDiscountProducts: "filtered30PercentDiscountProducts",
    show40PercentDiscountProducts: "filtered40PercentDiscountProducts",
    show50PercentDiscountProducts: "filtered50PercentDiscountProducts",
    show1DayDeliveryProducts: "filtered1DayDeliveryProducts",
    show7DaysDeliveryProducts: "filtered7DayDeliveryProducts",
    show15DaysDeliveryProducts: "filtered15DayDeliveryProducts",
  };

  useEffect(() => {
    const currentStatefulUrl = window.location;
    const currentSearchParams = new URLSearchParams(currentStatefulUrl.search);

    // extracting all applied checkbox filters from URL and applying them on page render
    const allCheckBoxFilters = [...checkboxFilterNames];
    allCheckBoxFilters.map((filterName) => {
      const filterTypeDecapitalised =
        filterName.charAt(0).toLowerCase() + filterName.slice(1);
      const allCurrentlyAppliedCheckboxFilters = currentSearchParams.getAll(
        filterTypeDecapitalised
      );
      const appliedFiltersArrayLength =
        allCurrentlyAppliedCheckboxFilters.length;
      if (appliedFiltersArrayLength > 0) {
        for (let i = 0; i < appliedFiltersArrayLength; i++) {
          const appliedFilterObject = checkboxFiltersList[
            filterName as keyof typeof checkboxFiltersList
          ].filter(
            ({ urlParameter }) =>
              urlParameter === allCurrentlyAppliedCheckboxFilters[i]
          );
          const dispatchAction = appliedFilterObject[0].dispatchAction;
          sortAndFilterDispatch({ type: `${dispatchAction}` });
        }
      }
    });

    // extracting applied sort option from URL and applying it on page render
    const currentlyAppliedSortOption = currentSearchParams.get("sort");
    if (currentlyAppliedSortOption) {
      const appliedSortOptionObject = sortByOptions.filter(
        ({ urlParameter }) => urlParameter === currentlyAppliedSortOption
      );
      const dispatchPayload = appliedSortOptionObject[0].dispatchPayload;
      sortAndFilterDispatch({ type: "SORT", payload: `${dispatchPayload}` });
    }

    // extracting applied price filter value from URL and applying it on page render
    const currentlyAppliedPriceFilterValue = searchParams.get("max-price");
    if (currentlyAppliedPriceFilterValue) {
      sortAndFilterDispatch({
        type: "CHANGE_PRICE_RANGE",
        payload: currentlyAppliedPriceFilterValue,
      });
    }
  }, []);

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
    sortBy,
  } = state;

  const getFilteredData = (
    sortedData: typeof allProducts,
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
    let allNewFilteredProducts: any[] = [];
    let filteredAllNewFilteredProducts: any[] = [];

    const filteredMenProducts = sortedData.filter(({ gender }: any) =>
      showMenProducts ? gender === "Men" : true
    );
    const filteredWomenProducts = sortedData.filter(({ gender }) =>
      showWomenProducts ? gender === "Women" : true
    );
    const filteredXSSizeProducts = sortedData.filter(({ sizesAvailable }) =>
      showExtraSmallSize ? sizesAvailable.includes("XS") : true
    );
    const filteredSSizeProducts = sortedData.filter(({ sizesAvailable }) =>
      showSmallSize ? sizesAvailable.includes("S") : true
    );
    const filteredMSizeProducts = sortedData.filter(({ sizesAvailable }) =>
      showMediumSize ? sizesAvailable.includes("M") : true
    );
    const filteredLSizeProducts = sortedData.filter(({ sizesAvailable }) =>
      showLargeSize ? sizesAvailable.includes("L") : true
    );
    const filteredXLSizeProducts = sortedData.filter(({ sizesAvailable }) =>
      showExtraLargeSize ? sizesAvailable.includes("XL") : true
    );
    const filtered2XLSizeProducts = sortedData.filter(({ sizesAvailable }) =>
      show2ExtraLargeSize ? sizesAvailable.includes("2XL") : true
    );
    const filtered3XLSizeProducts = sortedData.filter(({ sizesAvailable }) =>
      show3ExtraLargeSize ? sizesAvailable.includes("3XL") : true
    );
    const filteredBewakoofProducts = sortedData.filter(({ brand }) =>
      showBewakoofProducts ? brand === "Bewakoof" : true
    );
    const filteredRoadsterProducts = sortedData.filter(({ brand }) =>
      showRoadsterProducts ? brand === "Roadster" : true
    );
    const filteredLevisProducts = sortedData.filter(({ brand }) =>
      showLevisProducts ? brand === "Levi's" : true
    );
    const filteredTommyHilfigerProducts = sortedData.filter(({ brand }) =>
      showTommyHilfigerProducts ? brand === "Tommy Hilfiger" : true
    );
    const filteredUnderArmourProducts = sortedData.filter(({ brand }) =>
      showUnderArmourProducts ? brand === "Under Armour" : true
    );
    const filteredSweatshirtProducts = sortedData.filter(({ category }) =>
      showSweatShirts ? category === "Sweatshirt" : true
    );
    const filteredHoodieProducts = sortedData.filter(({ category }) =>
      showHoodies ? category === "Hoodie" : true
    );
    const filteredTshirtProducts = sortedData.filter(({ category }) =>
      showTshirts ? category === "Tshirt" : true
    );
    const filteredJoggersProducts = sortedData.filter(({ category }) =>
      showJoggers ? category === "Joggers" : true
    );
    const filteredPyjamaProducts = sortedData.filter(({ category }) =>
      showPyjamas ? category === "Pyjama" : true
    );
    const filteredShortsProducts = sortedData.filter(({ category }) =>
      showShorts ? category === "Shorts" : true
    );
    const filteredBoxersProducts = sortedData.filter(({ category }) =>
      showBoxers ? category === "Boxers" : true
    );
    const filtered10PercentDiscountProducts = sortedData.filter(
      ({ discount }) =>
        show10PercentDiscountProducts ? Number(discount) >= 10 : true
    );
    const filtered20PercentDiscountProducts = sortedData.filter(
      ({ discount }) =>
        show20PercentDiscountProducts ? Number(discount) >= 20 : true
    );
    const filtered30PercentDiscountProducts = sortedData.filter(
      ({ discount }) =>
        show30PercentDiscountProducts ? Number(discount) >= 30 : true
    );
    const filtered40PercentDiscountProducts = sortedData.filter(
      ({ discount }) =>
        show40PercentDiscountProducts ? Number(discount) >= 40 : true
    );
    const filtered50PercentDiscountProducts = sortedData.filter(
      ({ discount }) =>
        show50PercentDiscountProducts ? Number(discount) >= 50 : true
    );
    const filtered1DayDeliveryProducts = sortedData.filter(
      ({ deliveryTime }: any) =>
        show1DayDeliveryProducts ? Number(deliveryTime) <= 1 : true
    );
    const filtered7DayDeliveryProducts = sortedData.filter(
      ({ deliveryTime }: any) =>
        show7DaysDeliveryProducts ? Number(deliveryTime) <= 7 : true
    );
    const filtered15DayDeliveryProducts = sortedData.filter(
      ({ deliveryTime }: any) =>
        show15DaysDeliveryProducts ? Number(deliveryTime) <= 15 : true
    );

    allFiltersStateVariableArray.map((filterStateVariable) => {
      if (state[filterStateVariable]) {
        const currentlyFilteredProducts = [...allNewFilteredProducts];
        allNewFilteredProducts = [
          ...currentlyFilteredProducts,
          ...eval(
            stateVariableToFilteredProductsArray[
              filterStateVariable as keyof typeof stateVariableToFilteredProductsArray
            ]
          ),
        ];

        filteredAllNewFilteredProducts = allNewFilteredProducts.filter(
          (a, b) => allNewFilteredProducts.indexOf(a) === b
        );
      }
    });
    return filteredAllNewFilteredProducts;
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

  const getSortedData = (
    productsUnderPriceRange: typeof allProducts,
    sortBy: string | null
  ) => {
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productsUnderPriceRange.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    }

    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productsUnderPriceRange.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }

    if (sortBy && sortBy === "NEW_ARRIVAL") {
      productsUnderPriceRange.sort((a, b) => {
        const date1 = new Date(b.introduced_on).getTime();
        const date2 = new Date(a.introduced_on).getTime();
        return date1 > date2 ? 1 : -1;
        // return date1 - date2;
      });
    }

    if (sortBy && sortBy === "BEST_SELLER") {
      return productsUnderPriceRange.sort(
        (a, b) => Number(b.units_sold) - Number(a.units_sold)
      );
    }

    if (sortBy && sortBy === "POPULARITY") {
      return productsUnderPriceRange.sort(
        (a, b) => Number(b.product_reviews) - Number(a.product_reviews)
      );
    }

    return productsUnderPriceRange;
  };

  const productsUnderPriceRange = getProductsUnderPriceRange(
    originalDataList,
    priceRange
  );

  const sortedData = getSortedData(productsUnderPriceRange, sortBy);

  const filteredData = getFilteredData(sortedData, {
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

  const handleCheckboxFilterClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.currentTarget;
    const currentSearchParams = new URLSearchParams(searchParams);
    const allAppliedFilters = currentSearchParams.getAll(name);
    if (allAppliedFilters.includes(value)) {
      const newFiltersArray = allAppliedFilters.filter(
        (filterValue) => filterValue !== value
      );
      const newFiltersArrayLength = newFiltersArray.length;
      currentSearchParams.delete(name);
      for (let i = 0; i < newFiltersArrayLength; i++) {
        currentSearchParams.append(name, newFiltersArray[i]);
      }
      setSearchParams(currentSearchParams);
    } else {
      currentSearchParams.append(name, value);
      setSearchParams(currentSearchParams);
    }
  };

  const triggerSortDispatch = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selectedOption = sortByOptions.find(
      ({ urlParameter }) => urlParameter === value
    );
    const dispatchPayload = selectedOption!.dispatchPayload;
    sortAndFilterDispatch({ type: "SORT", payload: `${dispatchPayload}` });
  };

  const handleSortByFilterClick = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget;
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set(name, value);
    setSearchParams(currentSearchParams);
  };

  const handlePriceFilterClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.currentTarget;
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set(name, value);
    setSearchParams(currentSearchParams);
  };

  return (
    <div className={styles["all-products"]}>
      <div className={styles["product-category-info-and-sortby-container"]}>
        <div className={styles["product-category-info"]}>
          <hr className={styles["first-hr"]} />
          <span className={styles["product-category-heading"]}>
            All Products{" "}
            <span className={styles["number-of-items"]}>
              ({filteredData.length})
            </span>
          </span>
          <hr className={styles["second-hr"]} />
        </div>
        <div className={styles["sortby-container"]}>
          <div className={styles["sortby-heading-and-icon"]}>
            <img src={sortByIcon} alt="Sort By" />
            <span className={styles["sortby-heading"]}>Sort By</span>
          </div>
          <div className={styles["sortby-dropdown-container"]}>
            <select
              className={styles["sortby-dropdown"]}
              name="sort"
              onChange={(event) => {
                triggerSortDispatch(event);
                handleSortByFilterClick(event);
              }}
            >
              {sortByOptions.map(
                ({ filterLabel, urlParameter, dispatchPayload }) => (
                  <option
                    value={urlParameter}
                    selected={sortBy && sortBy === `${dispatchPayload}`}
                  >
                    {filterLabel}
                  </option>
                )
              )}
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
            <button
              className={styles["reset-button"]}
              onClick={() => {
                sortAndFilterDispatch({ type: "REMOVE_ALL_FILTERS" });
                setSearchParams({});
              }}
            >
              Reset
            </button>
          </div>
          <>
            <div className={styles["filter-container"]}>
              <FilterCategoryCollapsibleComponent title="Price">
                <PriceFilterComponent
                  filterName="max-price"
                  filterValue={priceRange}
                  onPriceFilterChange={(event) => {
                    sortAndFilterDispatch({
                      type: "CHANGE_PRICE_RANGE",
                      payload: event.target.value,
                    });
                    handlePriceFilterClick(event);
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
            const {
              id,
              name,
              price,
              description,
              images,
              introduced_on,
              units_sold,
              product_reviews,
            } = product;
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
                  style={{ margin: "30px 30px", cursor: "pointer" }}
                >
                  <SimilarProductsCard
                    brandName="Campus Sutra"
                    productName="Solid Olive Green Hoodie"
                    price={price}
                    imageSrc={images[1]}
                    introduced_on={product_reviews}
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
