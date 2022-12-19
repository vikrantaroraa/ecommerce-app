import { FilterCategoryCollapsibleComponentProps } from "src/components/FilterCategoryCollapsibleComponent/FilterCategoryCollapsibleComponent.interface";
import styles from "src/components/FilterCategoryCollapsibleComponent/FilterCategoryCollapsibleComponent.module.css";

function FilterCategoryCollapsibleComponent({
  title,
  children,
}: FilterCategoryCollapsibleComponentProps) {
  return (
    <div className={styles["filter-collapsible-component"]}>
      <details className={styles["filter-collapsible-component-details"]}>
        <summary className={styles["filter-collapsible-component-summary"]}>
          <div className={styles["filter-collapsible-component-title"]}>
            {title}
          </div>
        </summary>
        {children}
      </details>
    </div>
  );
}

export default FilterCategoryCollapsibleComponent;
