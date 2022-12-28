import { PriceFilterComponentProps } from "src/components/PriceFilterComponent/PriceFilterComponent.interface";
import styles from "src/components/PriceFilterComponent/PriceFilterComponent.module.css";

function PriceFilterComponent({
  filterName,
  filterValue,
  onPriceFilterChange,
}: PriceFilterComponentProps) {
  return (
    <div className={styles["price-filter-container"]}>
      <div className={styles["price-values-and-apply-button"]}>
        <div className={styles["price-values-container"]}>
          <input type="text" value={0} />
          <span>–</span>
          <input type="text" value={filterValue} />
        </div>
        <button className={styles["apply-price-filter-button"]}>Apply</button>
      </div>
      <input
        type="range"
        name={filterName}
        value={filterValue}
        min={200}
        max={1000}
        onChange={onPriceFilterChange}
      />
    </div>
  );
}

export default PriceFilterComponent;
