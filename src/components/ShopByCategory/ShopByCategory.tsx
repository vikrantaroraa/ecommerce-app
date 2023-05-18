import categoryBottomsHero from "src/assets/images/category-hero-images/category-bottoms-hero.webp";
import categoryHoodiesHero from "src/assets/images/category-hero-images/category-hoodies-hero.svg";
import categoryJacketsHero from "src/assets/images/category-hero-images/category-jackets-hero.svg";
import categoryKidsHero from "src/assets/images/category-hero-images/category-kids-hero.svg";
import categorySweatshirtsHero from "src/assets/images/category-hero-images/category-sweatshirts-hero.svg";
import categoryTshirtsHero from "src/assets/images/category-hero-images/category-tshirts-hero.svg";
import ShopByCategoryCard from "src/components/ShopByCategoryCard/ShopByCategoryCard";
import styles from "src/components/ShopByCategory/ShopByCategory.module.css";

const shopByCategoryList = [
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
];

function ShopByCategory() {
  return (
    <div className={styles["shop-by-category"]}>
      <div className={styles["shop-by-category-heading"]}>Shop By Category</div>
      <div className={styles["category-grid-container"]}>
        {shopByCategoryList.map(({ categoryName, imageUrl }) => {
          return (
            <ShopByCategoryCard
              categoryName={categoryName}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShopByCategory;
