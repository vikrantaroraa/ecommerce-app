import categoryBottomsHero from "src/assets/images/category-hero-images/category-bottoms-hero-8.svg";
import categoryHoodiesHero from "src/assets/images/category-hero-images/category-hoodies-hero.svg";
import categoryJacketsHero from "src/assets/images/category-hero-images/category-jackets-hero.svg";
import categoryKidsHero from "src/assets/images/category-hero-images/category-kids-hero.svg";
import categorySweatshirtsHero from "src/assets/images/category-hero-images/category-sweatshirts-hero.svg";
import categoryTshirtsHero from "src/assets/images/category-hero-images/category-tshirts-hero.svg";
import ShopByCategoryCard from "src/components/ShopByCategoryCard/ShopByCategoryCard";
import styles from "src/components/ShopByCategory/ShopByCategory.module.css";
import subscriptionHero from "src/assets/images/subscriptions-hero-updated.svg";

const shopByCategoryList = [
  [
    {
      categoryName: "T-Shirts",
      imageUrl: categoryTshirtsHero,
    },
    {
      categoryName: "Sweatshirts",
      imageUrl: categorySweatshirtsHero,
    },
    {
      categoryName: "Kids",
      imageUrl: categoryKidsHero,
    },
  ],
  [
    {
      categoryName: "Bottoms",
      imageUrl: categoryBottomsHero,
    },
    {
      categoryName: "Hoodies",
      imageUrl: categoryHoodiesHero,
    },
    {
      categoryName: "Jackets",
      imageUrl: categoryJacketsHero,
    },
  ],
];

function ShopByCategory() {
  return (
    <div className={styles["shop-by-category"]}>
      <div className={styles["shop-by-category-heading"]}>Shop By Category</div>
      <div className={styles["category-grid-container"]}>
        {/* {shopByCategoryList.map(({ categoryName, imageUrl }) => {
          return (
            <ShopByCategoryCard
              categoryName={categoryName}
              imageUrl={imageUrl}
            />
          );
        })} */}
        {shopByCategoryList.map((sublist, index) => {
          return (
            <div className={styles["category-grid"]}>
              {sublist.map(({ categoryName, imageUrl }, index) => (
                <div className={styles["grid-image-tile"]}>
                  <div className={styles["category-image"]}>
                    <img src={imageUrl} alt="shop by category card" />
                  </div>
                  <div className={styles["category-label"]}>{categoryName}</div>
                </div>
              ))}
            </div>
          );
        })}

        {/* example - code - Do Not Delete, Will need later for testing  */}
        {/* <div className={styles["category-grid"]}>
          <div className={styles["grid-image-tile"]}>
            <div className={styles["category-image"]}>
              <img src={categoryKidsHero} alt="shop by category card" />
            </div>
            <div className={styles["category-label"]}>Tshirt</div>
          </div>
          <div className={styles["grid-image-tile"]}>
            <div className={styles["category-image"]}>
              <img src={categoryTshirtsHero} alt="shop by category card" />
            </div>
            <div className={styles["category-label"]}>Tshirt</div>
          </div>
          <div className={styles["grid-image-tile"]}>3</div>
        </div> */}
        {/* <div className={styles["category-grid"]}>
          <div className={styles["grid-image-tile"]}>4</div>
          <div className={styles["grid-image-tile"]}>5</div>
          <div className={styles["grid-image-tile"]}>6</div>
        </div> */}
      </div>
    </div>
  );
}

export default ShopByCategory;
