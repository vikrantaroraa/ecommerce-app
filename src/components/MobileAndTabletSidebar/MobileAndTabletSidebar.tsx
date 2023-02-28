import { MobileAndTabletSidebarProps } from "src/components/MobileAndTabletSidebar/MobileAndTabletSidebar.interface";
import styles from "src/components/MobileAndTabletSidebar/MobileAndTabletSidebar.module.css";

function MobileAndTabletSidebar({
  children,
  showSidebar,
}: MobileAndTabletSidebarProps) {
  return (
    <div
      className={
        showSidebar
          ? `${styles["sidebar-filter"]} ${styles["active"]}`
          : styles["sidebar-filter"]
      }
      style={{
        width: showSidebar
          ? window.innerWidth > 500
            ? 500
            : window.innerWidth
          : 0,
        backgroundColor: "#efefee",
      }}
    >
      {children}
    </div>
  );
}

export default MobileAndTabletSidebar;
