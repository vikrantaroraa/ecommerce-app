import styles from "src/components/ProductInfo/ProductInfo.module.css";
import {
  faStar,
  faChevronDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CollapsibleComponent from "src/components/CollapsibleComponent/CollapsibleComponent";
import { useEffect, useState } from "react";
import { allProducts } from "src/api/all-products";
import { Link, useParams } from "react-router-dom";
import { useCart } from "src/context/cart-and-wishlist-context";

function ProductInfo() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { productId } = useParams();
  const {
    dispatch: productDispatch,
    state: { wishlist },
  } = useCart();

  useEffect(() => {
    localStorage.removeItem("selectedSize");
    localStorage.removeItem("selectedColor");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productId]);

  function getProductDetails(allProducts: any, productId: any) {
    return allProducts.find((product: any) => product.id === Number(productId));
  }

  const product = getProductDetails(allProducts, productId);

  const showSelectedColorTile = (color: string) => {
    const allColorTileBorderDivs = document.querySelectorAll(
      `.${styles["color-tile-border"]}`
    );

    allColorTileBorderDivs.forEach((div) =>
      div.classList.remove(`${styles["color-tile-selected"]}`)
    );

    const selectedColorTile = document.getElementById(color);
    // console.log("selectedTile:", selectedTile);
    selectedColorTile?.classList.add(`${styles["color-tile-selected"]}`);
  };

  const showSelectedSizeTile = (size: string) => {
    const allSizeTileDivs = document.querySelectorAll(
      `.${styles["size-tile"]}`
    );

    allSizeTileDivs.forEach((div) =>
      div.classList.remove(`${styles["size-tile-selected"]}`)
    );

    const selectedSizeTile = document.getElementById(size);
    // console.log("selectedTile:", selectedTile);
    selectedSizeTile?.classList.add(`${styles["size-tile-selected"]}`);
  };

  const {
    id,
    brand,
    category,
    name,
    description,
    rating,
    price,
    actualPrice,
    images,
    discount,
    color,
    colorsAvailable,
    sizesAvailable,
    deliveryTime,
  } = product;

  const itemIndexInWishlist = wishlist.findIndex((item: any) => item.id === id);

  return (
    <div className={styles["product-info"]}>
      <div className={styles["product-images-container"]}>
        <div className={styles["vertical-image-grid-container"]}>
          {images.map((image: string, index: number) => {
            return (
              <div
                className={styles["product-image"]}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image} alt="product" />
              </div>
            );
          })}
        </div>
        <div className={styles["active-product-image-container"]}>
          <div className={styles["active-product-image"]}>
            <img src={images[activeImageIndex]} alt="main product" />
          </div>
          <div className={styles["horizontal-image-grid-container"]}>
            {images.map((image: string, index: number) => (
              <div
                className={styles["horizontal-grid-image"]}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image} alt="product" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["product-data-container"]}>
        {/* This is basic product info section */}
        <div className={styles["basic-product-info"]}>
          <div className={styles["name-price-rating-offer"]}>
            <div className={styles["product-category-and-type"]}>
              {brand} {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            <div className={styles["product-name"]}>{name}</div>
            <div className={styles["rating-box"]}>
              {rating}
              <FontAwesomeIcon color={"#FCBF22"} icon={faStar} />
            </div>
            <div className={styles["price-and-discount"]}>
              <span className={styles["price"]}>₹ {price}</span>
              <s className={styles["actual-price"]}>₹ {actualPrice}</s>
              <span className={styles["discount"]}>{discount} % off</span>
            </div>
            <span className={styles["inclusive-of-all-taxes-line"]}>
              inclusive of all taxes
            </span>
          </div>
        </div>
        <hr />
        {/* This is color and size grid section */}
        <div className={styles["color-and-size-grid"]}>
          <div className={styles["color-grid"]}>
            <div className={styles["color-heading"]}>
              <span>Color: </span>
              <span className={styles["color-name"]}>{color}</span>
            </div>
            <div className={styles["color-options"]}>
              {colorsAvailable.map(({ color, productId }: any) => {
                return (
                  <Link to={`/product/${productId}`}>
                    <div
                      id={color}
                      className={styles["color-tile-border"]}
                      onClick={() => {
                        showSelectedColorTile(color);
                        localStorage.setItem("selectedColor", color);
                      }}
                    >
                      <div
                        style={{ backgroundColor: color }}
                        className={styles["color-tile"]}
                      ></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={styles["size-grid"]}>
            <div className={styles["size-heading"]}>
              <span>Size: </span>
              <span className={styles["size-name"]}>XL</span>
            </div>
            <div className={styles["size-options"]}>
              {sizesAvailable.map((size: string) => {
                return (
                  <div
                    id={size}
                    className={styles["size-tile"]}
                    onClick={() => {
                      showSelectedSizeTile(size);
                      localStorage.setItem("selectedSize", size);
                    }}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        {/* This is Add to cart and Wishlist button section */}
        <div className={styles["add-to-bag-and-wishlist-button"]}>
          <button
            className={styles["add-to-bag-button"]}
            onClick={() => {
              const selectedSize = localStorage.getItem("selectedSize");
              const selectedColor = localStorage.getItem("selectedColor");
              if (!selectedColor) {
                alert("Please Select a color");
              }
              if (!selectedSize) {
                alert("Please Select a size");
              }
              if (!selectedColor || !selectedSize) {
                return;
              } else {
                productDispatch({ type: "ADD_TO_CART", payload: product });
              }
            }}
          >
            <span>
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.289 5.09784H14.2747C14.2747 2.47547 12.1488 0.349609 9.52648 0.349609C6.90408 0.349609 4.77823 2.47547 4.77823 5.09784H2.76394C1.761 5.09784 0.930915 5.87767 0.868352 6.87866L0.156118 18.2744C0.0877815 19.3678 0.956156 20.2922 2.05171 20.2922H17.0012C18.0967 20.2922 18.9651 19.3678 18.8968 18.2744L18.1846 6.87865C18.122 5.87766 17.2919 5.09784 16.289 5.09784ZM4.77823 6.5223H2.76394C2.5132 6.5223 2.30569 6.71726 2.29005 6.96751L1.57781 18.3632C1.56073 18.6366 1.77782 18.8677 2.05171 18.8677H17.0012C17.2751 18.8677 17.4922 18.6366 17.4751 18.3632L16.7629 6.96751C16.7472 6.71727 16.5397 6.5223 16.289 6.5223H14.2747V10.0835C14.2747 10.4768 13.9558 10.7957 13.5625 10.7957C13.1691 10.7957 12.8502 10.4768 12.8502 10.0835V6.5223H6.2027V10.0835C6.2027 10.4768 5.88382 10.7957 5.49047 10.7957C5.09711 10.7957 4.77823 10.4768 4.77823 10.0835V6.5223ZM9.52648 1.77408C11.3621 1.77408 12.8502 3.26217 12.8502 5.09784H6.2027C6.2027 3.26217 7.69081 1.77408 9.52648 1.77408Z"
                  fill="white"
                />
              </svg>
            </span>
            Add to bag
          </button>
          <button
            className={styles["wishlist-button"]}
            onClick={() => {
              productDispatch({ type: "ADD_TO_WISHLIST", payload: product });
            }}
          >
            {wishlist.length !== 0 ? (
              itemIndexInWishlist === -1 ? (
                <>
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    color={"black"}
                    icon={faHeart}
                  />
                  Wishlist
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    color={"red"}
                    icon={faHeart}
                  />
                  Wishlisted
                </>
              )
            ) : (
              <>
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  color={"black"}
                  icon={faHeart}
                />
                Wishlist
              </>
            )}
          </button>
        </div>
        {/* <hr /> */}
        {/* This is Delivery location and pincode section */}
        <div className={styles["delivery-location-and-pincode"]}>
          <div className={styles["delivery-location-heading"]}>
            Choose Delivery Location
          </div>
          <p className={styles["delivery-location-paragraph"]}>
            Enter pincode of your location to check product availability and
            delivery options
          </p>
          <span className={styles["delivery-location-input-and-check-button"]}>
            <input
              inputMode={"numeric"}
              maxLength={6}
              className={styles["input"]}
              placeholder="Enter pincode"
            />
            <button className={styles["check-button"]}>Check</button>
          </span>
        </div>
        <hr />
        {/* This is Product Description + Returns and exchange section */}
        <div className={styles["product-decription-and-exchange"]}>
          <CollapsibleComponent title="Product Description">
            <div className={styles["content"]}>
              <p>{description}</p>
            </div>
          </CollapsibleComponent>
          <hr />
          <CollapsibleComponent title="Return & Exchange">
            <div className={styles["content"]}>
              <p>
                The estimated delivery time is {deliveryTime} days. Once
                received, the product can be returned within 30 days.
              </p>
            </div>
          </CollapsibleComponent>
        </div>
        <hr />
        {/* This is Coupons section */}
        <div className={styles["coupon"]}>
          <div className={styles["heaading-and-quantity"]}>
            <span className={styles["coupon-heaading"]}>Coupon </span>
            <span className={styles["dot"]}>.</span>
            <span className={styles["coupon-quantity"]}>1 available</span>
          </div>
          <div className={styles["coupon-tile"]}>
            <div className={styles["coupon-message"]}>
              <div className={styles["main-message"]}>
                Flat 20% off on 1st order
              </div>
              <p className={styles["message-description"]}>
                Log in to avail the offer. Maximum amount...
                <span className={styles["see-more"]}>
                  See more
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </p>
            </div>
            {/* Make the below horizontal Line dotted */}
            <hr className={styles["dotted-hr"]} />
            <div className={styles["coupon-code-and-copy-button"]}>
              <span className={styles["coupon-code"]}>WELCOME200</span>
              <button className={styles["copy-button"]}>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
