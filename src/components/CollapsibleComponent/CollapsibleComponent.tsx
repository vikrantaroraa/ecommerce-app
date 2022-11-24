import { CollapsibleComponentProps } from "src/components/CollapsibleComponent/CollapsibleComponent.interface";
import styles from "src/components/CollapsibleComponent/CollapsibleComponent.module.css";

function CollapsibleComponent({ title, children }: CollapsibleComponentProps) {
  return (
    <div className={styles["collapsible-component"]}>
      <details>
        <summary>
          {/* The styles for title div below are written in the ProductInfo.module.css */}
          <div className={styles["component-title"]}>{title}</div>
        </summary>
        {children}
      </details>
    </div>
  );
}

export default CollapsibleComponent;
