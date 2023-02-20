import styles from "src/components/SidebarFilter/SidebarFilter.module.css";
import { useState } from "react";
import { SidebarFilterProps } from "src/components/SidebarFilter/SidebarFilter.interface";
import FilterCategoryCollapsibleComponent from "src/components/FilterCategoryCollapsibleComponent/FilterCategoryCollapsibleComponent";
import PriceFilterComponent from "src/components/PriceFilterComponent/PriceFilterComponent";
import { useSortAndFilter } from "src/context/sort-and-filter-store/sort-and-filter-context";
import { useSearchParams } from "react-router-dom";
import {
  checkboxFilterNames,
  checkboxFiltersList,
  FilterObject,
} from "src/context/sort-and-filter-store/checkboxFiltersList";
import FilterRow from "src/components/FilterRow/FilterRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";

function SidebarFilter({
  showSidebarFilter,
  toggleShowSidebarFilter,
}: SidebarFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch: sortAndFilterDispatch } = useSortAndFilter();
  const { priceRange } = state;

  const handlePriceFilterClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.currentTarget;
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set(name, value);
    setSearchParams(currentSearchParams);
  };

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

  return (
    <div
      className={
        showSidebarFilter
          ? `${styles["sidebar-filter"]} ${styles["active"]}`
          : styles["sidebar-filter"]
      }
      style={{
        width: showSidebarFilter
          ? window.innerWidth > 500
            ? 500
            : window.innerWidth
          : 0,
      }}
    >
      <div className={styles["filter-products-heading-and-close-icon"]}>
        <span className={styles["filter-products-heading"]}>
          Filter Products
        </span>
        <span
          className={styles["filter-close-icon"]}
          onClick={toggleShowSidebarFilter}
        >
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: "26px" }} />
          {/* <FontAwesomeIcon
            icon={["fas", "rectangle-xmark"]}
            color={"#FCBF22"}
          /> */}
          {/* <FontAwesomeIcon color={"#FCBF22"} icon={faStar} /> */}
        </span>
      </div>
      <div className={styles["all-filters-container"]}>
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
      </div>
      <div className={styles["apply-filters-and-reset-filters-button"]}>
        <button
          className={styles["reset-filters-button"]}
          onClick={() => {
            sortAndFilterDispatch({ type: "REMOVE_ALL_FILTERS" });
            setSearchParams({});
          }}
        >
          Clear
        </button>
        <button
          className={styles["apply-filters-button"]}
          onClick={toggleShowSidebarFilter}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default SidebarFilter;
