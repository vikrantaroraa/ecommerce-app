import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MobileSortAndFilterProps } from "src/components/MobileSortAndFilter/MobileSortAndFilter.interface";
import styles from "src/components/MobileSortAndFilter/MobileSortAndFilter.module.css";
import SidebarFilter from "src/components/SidebarFilter/SidebarFilter";
import { sortByOptions } from "src/context/sort-and-filter-store/checkboxFiltersList";
import { useSortAndFilter } from "src/context/sort-and-filter-store/sort-and-filter-context";

function MobileSortAndFilter() {
  const { state, dispatch: sortAndFilterDispatch } = useSortAndFilter();
  const { sortBy } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSidebarFilter, setShowSidebarFilter] = useState(false);

  const toggleShowSidebarFilter = () =>
    setShowSidebarFilter(!showSidebarFilter);

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

  return (
    <div className={styles["mobile-sort-and-filter"]}>
      <div
        className={styles["mobile-filter-container"]}
        onClick={toggleShowSidebarFilter}
      >
        Filters
      </div>
      <div className={styles["mobile-filter-sidebar-container"]}>
        <SidebarFilter
          showSidebarFilter={showSidebarFilter}
          toggleShowSidebarFilter={toggleShowSidebarFilter}
        />
      </div>
      <div className={styles["mobile-sortby-dropdown-container"]}>
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
      </div>
    </div>
  );
}

export default MobileSortAndFilter;
