import styles from "src/components/ProductInfo/ProductInfo.module.css";
import {
  faStar,
  faChevronDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CollapsibleComponent from "src/components/CollapsibleComponent/CollapsibleComponent";
import bewakoof from "src/assets/images/bewakoof.jpg";
import roadster from "src/assets/images/roadster.jpg";
import handm from "src/assets/images/handm.jpg";
import campusSutra from "src/assets/images/campusSutra.jpg";
import { useState } from "react";

const colorArray = [
  "salmon",
  "skyblue",
  "#3B6DAC",
  "yellow",
  "pink",
  "lightgreen",
];
const sizeArray = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const imagesArray = [bewakoof, roadster, handm, campusSutra, bewakoof];

function ProductInfo() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  return (
    <div className={styles["product-info"]}>
      <div className={styles["product-images-container"]}>
        <div className={styles["vertical-image-grid-container"]}>
          {imagesArray.map((image, index) => {
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
            <img src={imagesArray[activeImageIndex]} alt="main product" />
          </div>
        </div>
      </div>
      <div className={styles["product-data-container"]}>
        {/* This is basic product info section */}
        <div className={styles["basic-product-info"]}>
          <div className={styles["name-price-rating-offer"]}>
            <div className={styles["product-category-and-type"]}>
              Nike Winterwears
            </div>
            <div className={styles["product-name"]}>
              Men’s Solid Black Slim-fit Hoodie
            </div>
            <div className={styles["rating-box"]}>
              4.5
              <FontAwesomeIcon color={"#FCBF22"} icon={faStar} />
            </div>
            <div className={styles["price-and-discount"]}>
              <span className={styles["price"]}>₹ 4500</span>
              <s className={styles["actual-price"]}>₹ 5500</s>
              <span className={styles["discount"]}>45 % off</span>
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
              <span className={styles["color-name"]}>Balck</span>
            </div>
            <div className={styles["color-options"]}>
              {colorArray.map((color, index) => {
                return (
                  <div
                    id={color}
                    className={styles["color-tile-border"]}
                    onClick={() => showSelectedColorTile(color)}
                  >
                    <div
                      style={{ backgroundColor: color }}
                      className={styles["color-tile"]}
                    ></div>
                  </div>
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
              {sizeArray.map((size, index) => {
                return (
                  <div
                    id={size}
                    className={styles["size-tile"]}
                    onClick={() => showSelectedSizeTile(size)}
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
          <button className={styles["add-to-bag-button"]}>
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
          <button className={styles["wishlist-button"]}>
            {/* This is a black un-filled heart to show non-wishlisted item */}
            {/* <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7099 0.387695C16.2164 0.387695 17.6615 0.985503 18.7277 2.04988C19.794 3.11426 20.3943 4.55824 20.3969 6.06481C20.3969 9.12168 19.2754 10.5807 14.2633 14.5407L11.689 16.5389C10.9728 17.0948 9.97102 17.0948 9.25481 16.5389L6.68054 14.5407C1.6684 10.5807 0.546875 9.12168 0.546875 6.06481C0.549503 4.55824 1.14983 3.11426 2.21608 2.04988C3.28232 0.985503 4.72733 0.387695 6.23392 0.387695C7.77074 0.394993 9.24441 1.00012 10.3429 2.07495L10.4719 2.19668L10.6009 2.07495C11.6994 1.00012 13.173 0.394993 14.7099 0.387695ZM9.92877 3.70398L9.95722 3.73116C10.245 4.00661 10.6987 4.00661 10.9865 3.73116L11.0151 3.70381C11.7623 2.98868 12.5372 2.24696 13.5326 1.97002C13.9139 1.86392 14.3107 1.80777 14.7132 1.80556C15.8429 1.80645 16.9264 2.25511 17.726 3.05334C18.526 3.85199 18.9767 4.93535 18.9791 6.06577C18.979 7.35843 18.759 8.17701 18.0645 9.12792C17.2885 10.1907 15.9075 11.4344 13.3891 13.4245L10.8197 15.4188C10.615 15.5777 10.3288 15.5777 10.1241 15.4188L7.55482 13.4245C5.03628 11.4345 3.6553 10.1907 2.8792 9.12792C2.18484 8.1771 1.96488 7.35862 1.96474 6.06611C1.96702 4.93557 2.41765 3.85208 3.21778 3.05334C4.0174 2.25511 5.1008 1.80645 6.23056 1.80556C6.6328 1.80777 7.02933 1.86384 7.41045 1.9698C8.4062 2.24665 9.18137 2.98864 9.92877 3.70398Z"
                fill="#2C2C2C"
              />
            </svg> */}
            {/* This is a black filled heart for wishlisted item */}
            {/* <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1.95735L10.8635 1.82846C9.7014 0.691357 8.14236 0.051177 6.5165 0.043457C4.92264 0.043457 3.39391 0.675897 2.2659 1.80194C1.13789 2.92798 0.50278 4.45561 0.5 6.04946C0.5 9.28342 1.6865 10.8269 6.989 15.0164L9.7737 17.1779C10.4953 17.738 11.5047 17.738 12.2263 17.1779L15.011 15.0164C20.3135 10.8269 21.5 9.28342 21.5 6.04946C21.4972 4.45561 20.8621 2.92798 19.7341 1.80194C18.6061 0.675897 17.0773 0.043457 15.4835 0.043457C13.8576 0.051177 12.2986 0.691357 11.1365 1.82846L11 1.95735Z"
                fill="black"
              />
            </svg> */}
            {/* This is a red filled heart for wishlisted item */}
            <FontAwesomeIcon
              style={{ fontSize: "20px" }}
              color={"red"}
              icon={faHeart}
            />
            Wishlisted
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
            <div className="content">
              <p>
                And this is the text that will be displayed when we expand the
                details
              </p>
            </div>
          </CollapsibleComponent>
          <hr />
          <CollapsibleComponent title="Return & Exchange">
            <div className="content">
              <p>
                And this is the text that will be displayed when we expand the
                details
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
