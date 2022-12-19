import { FilterRowProps } from "src/components/FilterRow/FilterRow.interface";
import styles from "src/components/FilterRow/FilterRow.module.css";

function FilterRow({ filterName }: FilterRowProps) {
  return (
    <div className={styles["filter-row"]}>
      <div>{filterName}</div>
      <input type="checkbox" />
    </div>

    //   <div className={styles["filter-row"]}>
    //   <div>Bewakoof</div>
    //   <div className={styles["checkbox-container"]}>
    //     <input type="checkbox" id="filter-checkbox" />
    //     <label htmlFor="filter-checkbox" />
    //   </div>
    // </div>
  );
}

export default FilterRow;
