import styles from "src/components/TrendingProducts/TrendingProducts.module.css";
import TrendingProductsCard from "src/components/TrendingProductsCard/TrendingProductsCard";
import lilacTshirt from "src/assets/images/Men/Tshirts/lilac-tshirt/lilac-tshirt-2.svg";
import yellowTshirt from "src/assets/images/Men/Tshirts/yellow-tshirt/yellow-tshirt-3.svg";
import blackShorts from "src/assets/images/Women/Shorts/black-shorts/black-shorts-1.svg";
import gingerrootSweatshirt from "src/assets/images/Women/Sweatshirts/gingerroot-sweatshirt/gingerroot-sweatshirt-3.svg";

function TrendingProducts() {
  return (
    <div className={styles["trending-products"]}>
      <span className={styles["trending-products-heading"]}>
        Trending Products
      </span>
      <div className={styles["trending-products-grid"]}>
        <TrendingProductsCard
          productCategory="Women Topwear"
          productName="Ginger Root Sweatshirt"
          price={1499}
          imageSrc={gingerrootSweatshirt}
        />
        <TrendingProductsCard
          productCategory="Women Bottomwear"
          productName="Black Casual Shorts"
          price={1499}
          imageSrc={blackShorts}
        />
        <TrendingProductsCard
          productCategory="Men's Topwear"
          productName="Rose Dawn Regular T-shirt"
          price={1499}
          imageSrc={yellowTshirt}
        />
        <TrendingProductsCard
          productCategory="Men's Topwear"
          productName="Liliac Regular T-shirt"
          price={1499}
          imageSrc={lilacTshirt}
        />
      </div>
    </div>
  );
}

export default TrendingProducts;
