import { CollapsibleComponentProps } from "src/components/CollapsibleComponent/CollapsibleComponent.interface";
import styles from "src/components/CollapsibleComponent/CollapsibleComponent.module.css";

function CollapsibleComponent({ title, children }: CollapsibleComponentProps) {
  return (
    <div className={styles["collapsible-component"]}>
      <details className={styles["collapsible-component-details"]}>
        <summary className={styles["collapsible-component-summary"]}>
          <div className={styles["collapsible-component-title"]}>{title}</div>
        </summary>
        {children}
      </details>
    </div>
  );
}

export default CollapsibleComponent;
