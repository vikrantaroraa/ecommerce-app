import { FilterRowProps } from "src/components/FilterRow/FilterRow.interface";
import styles from "src/components/FilterRow/FilterRow.module.css";

function FilterRow({
  filterLabel,
  filterName,
  filterUrlParameter,
  isChecked,
  onFilterRowClick,
}: FilterRowProps) {
  const filterNameDecapitalised =
    filterName.charAt(0).toLowerCase() + filterName.slice(1);
  return (
    <div className={styles["filter-row"]}>
      <div>{filterLabel}</div>
      <div className={styles["filter-row-checkbox-container"]}>
        <input
          type="checkbox"
          value={filterUrlParameter}
          name={filterNameDecapitalised}
          onChange={onFilterRowClick}
          checked={isChecked}
        />
      </div>
    </div>
  );
}

export default FilterRow;
