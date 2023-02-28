import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileAndTabletSidebar from "src/components/MobileAndTabletSidebar/MobileAndTabletSidebar";
import { MobileSidebarMenuProps } from "src/components/MobileSidebarMenu/MobileSidebarMenu.interface";
import styles from "src/components/MobileSidebarMenu/MobileSidebarMenu.module.css";
import mountainLogo from "src/assets/images/app-logo/mountain.png";
import { Link } from "react-router-dom";
import wishlistIcon from "src/assets/images/wishlist-icon2.svg";
import cartIcon from "src/assets/images/cart-icon2.svg";
import userIcon from "src/assets/images/user-icon.svg";
import allProductsIcon from "src/assets/images/all-products-icon.svg";

const mobileSidebarMenuItemsList = [
  {
    redirectUrl: "/all-products",
    imageUrl: allProductsIcon,
    imageAltText: "All Products",
    itemLabel: "All Products",
  },
  {
    redirectUrl: "/",
    imageUrl: userIcon,
    imageAltText: "User",
    itemLabel: "Sign In",
  },
  {
    redirectUrl: "/wishlist",
    imageUrl: wishlistIcon,
    imageAltText: "Wishlist",
    itemLabel: "Wishlist",
  },
  {
    redirectUrl: "/cart",
    imageUrl: cartIcon,
    imageAltText: "Cart",
    itemLabel: "Cart",
  },
];

function MobileSidebarMenu({
  showSidebar,
  toggleShowSidebar,
}: MobileSidebarMenuProps) {
  return (
    <div>
      <MobileAndTabletSidebar showSidebar={showSidebar}>
        <div className={styles["mobile-sidebar-menu-container"]}>
          <div className={styles["app-logo-and-close-icon"]}>
            <span className={styles["filter-products-heading"]}>
              <div className={styles["app-logo"]}>
                <Link to="/">
                  <img
                    src={mountainLogo}
                    alt="app-logo"
                    onClick={toggleShowSidebar}
                  />
                </Link>
              </div>
            </span>
            <span
              className={styles["filter-close-icon"]}
              onClick={toggleShowSidebar}
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: "26px", color: "red" }}
              />
            </span>
          </div>
          <div className={styles["mobile-sidebar-menu"]}>
            {mobileSidebarMenuItemsList.map(
              ({ redirectUrl, imageUrl, imageAltText, itemLabel }) => {
                return (
                  <Link to={redirectUrl}>
                    <div
                      className={styles["sidebar-menu-item"]}
                      onClick={toggleShowSidebar}
                    >
                      <div className={styles["icon-container"]}>
                        <img src={imageUrl} alt={imageAltText} />
                      </div>
                      {itemLabel}
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </MobileAndTabletSidebar>
    </div>
  );
}

export default MobileSidebarMenu;
