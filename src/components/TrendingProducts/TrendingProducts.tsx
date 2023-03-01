import styles from "src/components/TrendingProducts/TrendingProducts.module.css";
import TrendingProductsCard from "src/components/TrendingProductsCard/TrendingProductsCard";
import lilacTshirt from "src/assets/images/Men/Tshirts/lilac-tshirt/lilac-tshirt-2.svg";
import yellowTshirt from "src/assets/images/Men/Tshirts/yellow-tshirt/yellow-tshirt-3.svg";
import blackShorts from "src/assets/images/Women/Shorts/black-shorts/black-shorts-2.svg";
import smokegreenShorts from "src/assets/images/Women/Shorts/smokegreen-shorts/smokegreen-shorts-2.svg";
import { Link } from "react-router-dom";

const trendingProductsDataList = [
  {
    redirectUrl: "/product/23",
    productCategory: "Women Bottomwear",
    productName: "Smokegreen Casual Shorts",
    price: 1000,
    imageSrc: smokegreenShorts,
    actualPrice: 1699,
  },
  {
    redirectUrl: "/product/22",
    productCategory: "Women Bottomwear",
    productName: "Black Casual Shorts",
    price: 1000,
    imageSrc: blackShorts,
    actualPrice: 1499,
  },
  {
    redirectUrl: "/product/14",
    productCategory: "Men's Topwear",
    productName: "Yellow Regular T-shirt",
    price: 799,
    imageSrc: yellowTshirt,
    actualPrice: 1299,
  },
  {
    redirectUrl: "/product/13",
    productCategory: "Men's Topwear",
    productName: "Liliac Regular T-shirt",
    price: 999,
    imageSrc: lilacTshirt,
    actualPrice: 1499,
  },
];

function TrendingProducts() {
  return (
    <div className={styles["trending-products"]}>
      <span className={styles["trending-products-heading"]}>
        Trending Products
      </span>
      <div className={styles["trending-products-grid"]}>
        {trendingProductsDataList.map(
          ({
            redirectUrl,
            productCategory,
            productName,
            price,
            imageSrc,
            actualPrice,
          }) => {
            return (
              <Link to={redirectUrl}>
                <TrendingProductsCard
                  productCategory={productCategory}
                  productName={productName}
                  price={price}
                  imageSrc={imageSrc}
                  actualPrice={actualPrice}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}

export default TrendingProducts;
