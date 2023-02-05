import TrendingProducts from "src/components/TrendingProducts/TrendingProducts";
import gingerrootSweatshirt from "src/assets/images/Women/Sweatshirts/gingerroot-sweatshirt/gingerroot-sweatshirt-2.svg";
import styles from "src/pages/LandingPage/LandingPage.module.css";
import CollectionsCard from "src/components/CollectionsCard/CollectionsCard";
import greyCollection from "src/assets/images/grey-collection.svg";
import tshirtCollection from "src/assets/images/tshirt-collection.jpg";

function LandingPage() {
  return (
    <div className={styles["landing-page"]}>
      <div className={styles["main-heading-and-hero-image"]}>
        <div className={styles["main-heading-and-info-container"]}>
          <div className={styles["main-heading"]}>
            Discover Solid <br /> Collection
          </div>
          <div className={styles["horizontal-line-and-message"]}>
            <div className={styles["hr-container"]}>
              <hr />
            </div>
            <p className={styles["message"]}>
              No prints is new cool! Choose from <br /> the wide range of solid
              clothes for <br /> sophisticated you.
            </p>
          </div>
          <div className={styles["start-shopping-button-container"]}>
            <button>Start Shopping</button>
          </div>
          <div className={styles["user-icons-and-number-of-reviews-container"]}>
            <div>User icons</div>
            <div>
              <p className={styles["number-of-reviews"]}>
                25k+ Positive <br />
                Reviews
              </p>
            </div>
          </div>
        </div>
        <div className={styles["hero-icon-container"]}>
          <div className={styles["hero-image-container"]}>
            <img src={gingerrootSweatshirt} />
          </div>
        </div>
      </div>
      <div className={styles["trending-products-container"]}>
        <TrendingProducts />
      </div>
      <div className={styles["collections-card-container"]}>
        <CollectionsCard
          imageSrc={greyCollection}
          redirectUrl={"kuch bhi"}
          collectionInfo={
            <>
              All gray collection <br /> to meet your gray <br /> personality
            </>
          }
          textAlignment="left"
          imageAlignment="center"
        />
        <CollectionsCard
          imageSrc={tshirtCollection}
          redirectUrl={"kuch bhi"}
          collectionInfo={
            <>
              Wide range of <br /> regular t-shirts is <br /> on 50% off
            </>
          }
          textAlignment="right"
          imageAlignment="left"
        />
      </div>
    </div>
  );
}

export default LandingPage;
