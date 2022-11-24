import styles from "src/components/SimilarProducts/SimilarProducts.module.css";
import SimilarProductsCard from "src/components/SimilarProductsCard/SimilarProductsCard";
import bewakoof from "src/assets/images/bewakoof.jpg";
import roadster from "src/assets/images/roadster.jpg";
import handm from "src/assets/images/handm.jpg";
import campusSutra from "src/assets/images/campusSutra.jpg";

function SimilarProducts() {
  return (
    <div className={styles["similar-products"]}>
      <span className={styles["similar-products-heading"]}>
        Similar Products
      </span>
      <div className={styles["similar-products-horizontal-grid"]}>
        <SimilarProductsCard
          brandName="Bewakoof"
          productName="Solid Green Hoodie"
          price={1499}
          imageSrc={bewakoof}
        />
        <SimilarProductsCard
          brandName="H & M"
          productName="Solid Blue Hoodie"
          price={1499}
          imageSrc={handm}
        />
        <SimilarProductsCard
          brandName="Roadster"
          productName="Solid Gray Hoodie"
          price={1499}
          imageSrc={roadster}
        />
        <SimilarProductsCard
          brandName="H & M"
          productName="Solid Blue Hoodie"
          price={1499}
          imageSrc={handm}
        />
        <SimilarProductsCard
          brandName="Campus Sutra"
          productName="Solid Olive Green Hoodie"
          price={1499}
          imageSrc={campusSutra}
        />
      </div>
    </div>
  );
}

export default SimilarProducts;
