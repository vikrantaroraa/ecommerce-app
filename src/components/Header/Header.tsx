import { useCart } from "src/context/cart-and-wishlist-context";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import styles from "src/components/Header/Header.module.css";
import React, { useState } from "react";
import { checkboxFiltersList } from "src/context/sort-and-filter-store/checkboxFiltersList";
import { useSortAndFilter } from "src/context/sort-and-filter-store/sort-and-filter-context";
import wishlistIcon from "src/assets/images/wishlist-icon2.svg";
import cartIcon from "src/assets/images/cart-icon2.svg";
import mountainLogo from "src/assets/images/app-logo/mountain.png";
import userIcon from "src/assets/images/user-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [searchString, setSearchString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch: sortAndFilterDispatch } = useSortAndFilter();
  const [actionDispatched, setActionDispatched] = useState("");
  const [urlParameterSearched, setUrlParameterSearched] = useState("");
  const [filterTypeSearched, setFilterTypeSearched] = useState("");

  const {
    state: { cart, wishlist },
  } = useCart();

  const { logoutUser } = useAuth();

  const totalItemsInCart = () => {
    let totalItems = 0;
    cart.map((item: any) => {
      totalItems += item.quantity;
    });
    return totalItems;
  };

  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearchParams = new URLSearchParams(searchParams);
    const userLocationBeforeRedirect = location.pathname;
    console.log({ userLocationBeforeRedirect });
    const { value } = e.currentTarget;
    setSearchString(value);
    if (value !== "") {
      const brandObject = checkboxFiltersList.Brand.find(
        ({ filterLabel }) => filterLabel === value
      );
      if (!brandObject) {
        const categoryObject = checkboxFiltersList.Category.find(
          ({ filterLabel }) => filterLabel === value
        );
        console.log("Hello categoryObject:", categoryObject);
        const urlParameter = categoryObject?.urlParameter;
        const dispatchAction = categoryObject?.dispatchAction;
        setUrlParameterSearched(urlParameter!);
        setActionDispatched(dispatchAction!);
        setFilterTypeSearched("category");
        if (userLocationBeforeRedirect !== "/all-products") {
          navigate(`/all-products?category=${urlParameter}`);
        } else {
          sortAndFilterDispatch({ type: `${dispatchAction}` });
          const currentSearchParams = new URLSearchParams(searchParams);
          currentSearchParams.append("category", urlParameter as string);
          setSearchParams(currentSearchParams);
        }
      } else {
        const urlParameter = brandObject?.urlParameter;
        const dispatchAction = brandObject?.dispatchAction;
        setUrlParameterSearched(urlParameter!);
        setActionDispatched(dispatchAction!);
        setFilterTypeSearched("brand");
        console.log("Hello brandObject:", brandObject);
        if (userLocationBeforeRedirect !== "/all-products") {
          navigate(`/all-products?brand=${urlParameter}`);
        } else {
          sortAndFilterDispatch({ type: `${dispatchAction}` });
          const currentSearchParams = new URLSearchParams(searchParams);
          currentSearchParams.append("brand", urlParameter as string);
          setSearchParams(currentSearchParams);
        }
      }
    } else if (value === "") {
      const allAppliedFilters = currentSearchParams.getAll(filterTypeSearched);
      if (allAppliedFilters.includes(urlParameterSearched)) {
        sortAndFilterDispatch({ type: `${actionDispatched}` });
        const newFiltersArray = allAppliedFilters.filter(
          (filterValue) => filterValue !== urlParameterSearched
        );
        const newFiltersArrayLength = newFiltersArray.length;
        currentSearchParams.delete(filterTypeSearched);
        for (let i = 0; i < newFiltersArrayLength; i++) {
          currentSearchParams.append(filterTypeSearched, newFiltersArray[i]);
        }
        setSearchParams(currentSearchParams);
      }
    }
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["app-name-and-main-navigation-menu"]}>
        <div className={styles["app-name"]}>
          <Link to="/">
            <img src={mountainLogo} alt="app-logo" />
          </Link>
        </div>
        <div className={styles["navigation-link"]}>
          <Link to="/all-products">ALL PRODUCTS</Link>
        </div>
        {/* <div className={styles["navigation-link"]}>
          <Link to={"/all-products?gender=women"}>WOMEN</Link>
        </div>
        <div className={styles["navigation-link"]}>
          <Link to={"/all-products?gender=women"}>MEN</Link>
        </div> */}
        <div className={styles["navigation-link"]}>
          <Link to="/address">ADDRESS</Link>
        </div>
        <div className={styles["navigation-link"]}>
          <Link to={"/shipping"}>SHIPPING</Link>
        </div>
        {/* <div className={styles["navigation-link"]}>Beauty</div>
        <div className={styles["navigation-link"]}>Decor</div> */}
      </div>
      <div className={styles["search-input-container"]}>
        <input
          autoComplete="off"
          type="search"
          placeholder="Search for products, brands and more"
          value={searchString}
          onChange={(e) => searchProducts(e)}
          list="products"
        />
        <datalist id="products">
          {checkboxFiltersList.Brand.map(({ filterLabel }) => (
            <option>{filterLabel}</option>
          ))}
          {checkboxFiltersList.Category.map(({ filterLabel }) => (
            <option>{filterLabel}</option>
          ))}
        </datalist>
      </div>
      <div className={styles["wishlist-cart-signin-button-container"]}>
        {/* <span>Profile</span> */}
        <span className={styles["wishlist-button"]}>
          <Link to="/wishlist">
            <span className={styles["wishlist-icon-container"]}>
              {wishlist.length ? (
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  color={"red"}
                  icon={faHeart}
                />
              ) : (
                <img src={wishlistIcon} alt="Wishlist" title="Wishlist" />
              )}
            </span>
            {/* <span className={styles["wishlist-length"]}>
              ({wishlist.length})
            </span> */}
          </Link>
        </span>
        <span className={styles["cart-button"]}>
          <Link to="/cart">
            <span className={styles["cart-icon-container"]}>
              <img src={cartIcon} alt="Cart" title="Cart" />
            </span>
            {/* <span className={styles["cart-length"]}>
              ({totalItemsInCart()})
            </span> */}
          </Link>
        </span>
        {/* We will use this logout button and feature when implementing actual login */}
        {/* <button className={styles["signin-button"]} onClick={logoutUser}>
          Logout
        </button> */}

        <Link to="/">
          <span className={styles["wishlist-icon-container"]}>
            <img src={userIcon} alt="Sign In" title="Sign In" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
