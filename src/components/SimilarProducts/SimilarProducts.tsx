import styles from "src/components/SimilarProducts/SimilarProducts.module.css";
import SimilarProductsCard from "src/components/SimilarProductsCard/SimilarProductsCard";
import lilacTshirt from "src/assets/images/Men/Tshirts/lilac-tshirt/lilac-tshirt-2.svg";
import yellowTshirt from "src/assets/images/Men/Tshirts/yellow-tshirt/yellow-tshirt-3.svg";
import blackShorts from "src/assets/images/Women/Shorts/black-shorts/black-shorts-2.svg";
import smokegreenShorts from "src/assets/images/Women/Shorts/smokegreen-shorts/smokegreen-shorts-2.svg";
import redJoggers from "src/assets/images/Men/Joggers/red-joggers/red-joggers-2.svg";
import { Link } from "react-router-dom";

const similarProductsDataList = [
  {
    redirectUrl: "/product/23",
    brandName: "Bewakoof",
    productName: "Smokegreen Casual Shorts",
    price: 1000,
    imageSrc: smokegreenShorts,
    actualPrice: 1699,
    discount: 45,
  },
  {
    redirectUrl: "/product/14",
    brandName: "Tommy Hilfiger",
    productName: "Yellow Regular T-shirt",
    price: 799,
    imageSrc: yellowTshirt,
    actualPrice: 1299,
    discount: 40,
  },
  {
    redirectUrl: "/product/5",
    brandName: "Under Armour",
    productName: "Red Joggers",
    price: 1000,
    imageSrc: redJoggers,
    actualPrice: 1299,
    discount: 25,
  },
  {
    redirectUrl: "/product/22",
    brandName: "Bewakoof",
    productName: "Black Casual Shorts",
    price: 1000,
    imageSrc: blackShorts,
    actualPrice: 1499,
    discount: 40,
  },
  {
    redirectUrl: "/product/13",
    brandName: "Levi's",
    productName: "Liliac Regular T-shirt",
    price: 999,
    imageSrc: lilacTshirt,
    actualPrice: 1499,
    discount: 35,
  },
];

function SimilarProducts() {
  return (
    <div className={styles["similar-products"]}>
      <span className={styles["similar-products-heading"]}>
        Similar Products
      </span>
      <div className={styles["similar-products-horizontal-grid"]}>
        {similarProductsDataList.map(
          ({
            redirectUrl,
            brandName,
            productName,
            price,
            imageSrc,
            actualPrice,
            discount,
          }) => {
            return (
              <Link
                to={redirectUrl}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <SimilarProductsCard
                  brandName={brandName}
                  productName={productName}
                  price={price}
                  imageSrc={imageSrc}
                  actualPrice={actualPrice}
                  discount={discount}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}

export default SimilarProducts;
