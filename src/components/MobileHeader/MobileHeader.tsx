import { Link } from "react-router-dom";
import mountainLogo from "src/assets/images/app-logo/mountain.png";
import hamburgerMenu from "src/assets/images/app-logo/hamburger-menu.png";
import hamburgerMenu2 from "src/assets/images/app-logo/hamburger-menu-2.png";
import styles from "src/components/MobileHeader/MobileHeader.module.css";
import MobileSidebarMenu from "src/components/MobileSidebarMenu/MobileSidebarMenu";
import { useState } from "react";

function MobileHeader() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className={styles["mobile-header"]}>
      <div className={styles["menu-icon"]} onClick={toggleShowSidebar}>
        <img src={hamburgerMenu2} alt="menu" />
      </div>
      <div className={styles["app-logo"]}>
        <Link to="/">
          <img src={mountainLogo} alt="app-logo" />
        </Link>
        <MobileSidebarMenu
          showSidebar={showSidebar}
          toggleShowSidebar={toggleShowSidebar}
        />
      </div>
    </div>
  );
}

export default MobileHeader;
