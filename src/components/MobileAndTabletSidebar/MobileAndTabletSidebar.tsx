import { MobileAndTabletSidebarProps } from "src/components/MobileAndTabletSidebar/MobileAndTabletSidebar.interface";
import styles from "src/components/MobileAndTabletSidebar/MobileAndTabletSidebar.module.css";

function MobileAndTabletSidebar({
  children,
  showSidebarFilter,
}: MobileAndTabletSidebarProps) {
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
      {children}
    </div>
  );
}

export default MobileAndTabletSidebar;
