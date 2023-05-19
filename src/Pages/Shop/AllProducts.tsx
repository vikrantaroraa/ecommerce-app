import styles from "src/pages/Shop/AllProducts.module.css";
import { Link, useSearchParams } from "react-router-dom";
import FilterCategoryCollapsibleComponent from "src/components/FilterCategoryCollapsibleComponent/FilterCategoryCollapsibleComponent";
import FilterRow from "src/components/FilterRow/FilterRow";
import SimilarProductsCard from "src/components/SimilarProductsCard/SimilarProductsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
import MobileSortAndFilter from "src/components/MobileSortAndFilter/MobileSortAndFilter";
import {
  getFilteredData,
  getProductsUnderPriceRange,
  getSortedData,
} from "src/utils/sortAndFilterHelper";
// import sortBy from "src/assets/svg/sortBy.svg";

const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch: sortAndFilterDispatch } = useSortAndFilter();
  const { originalDataList, priceRange, sortBy } = state;

  const newStateVariablesObject = { ...state };
  delete newStateVariablesObject.originalDataList;
  delete newStateVariablesObject.sortBy;
  delete newStateVariablesObject.priceRange;

  const onlyFilterVariablesObject = newStateVariablesObject;

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

  const productsUnderPriceRange = getProductsUnderPriceRange(
    originalDataList,
    priceRange
  );

  const sortedData = getSortedData(productsUnderPriceRange, sortBy);

  const filteredData = getFilteredData(sortedData, onlyFilterVariablesObject);
  // console.log("ye hai filtered data - data:", filteredData);

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
      <div className={styles["mobile-sort-and-filter-container"]}>
        <MobileSortAndFilter />
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
            // console.log({ filteredData });
            const { id, brand, name, price, actualPrice, images, discount } =
              product;
            return (
              <Link
                to={`/product/${product.id}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <SimilarProductsCard
                    brandName={brand}
                    productName={name}
                    price={price}
                    imageSrc={images[1]}
                    actualPrice={actualPrice}
                    discount={discount}
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
