import TrendingProducts from "src/components/TrendingProducts/TrendingProducts";
import gingerrootSweatshirt from "src/assets/images/Women/Sweatshirts/gingerroot-sweatshirt/gingerroot-sweatshirt-2.svg";
import styles from "src/pages/LandingPage/LandingPage.module.css";
import CollectionsCard from "src/components/CollectionsCard/CollectionsCard";
import greyCollection from "src/assets/images/grey-collection.svg";
import tshirtCollection from "src/assets/images/tshirt-collection.jpg";
import subscriptionHero from "src/assets/images/subscriptions-hero.svg";
import ShopByCategory from "src/components/ShopByCategory/ShopByCategory";
import InstagramWall from "src/components/InstagramWall/InstagramWall";

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
      <div className={styles["shop-by-category-container"]}>
        <ShopByCategory />
      </div>
      <div className={styles["email-subscription-container"]}>
        <div className={styles["email-subscription"]}>
          <div className={styles["text-and-email-input-container"]}>
            <div className={styles["primary-subscription-text"]}>
              Stay tune with us for latest collection update
            </div>
            <div className={styles["secondary-subscription-text"]}>
              We collect and process your personal data to better response to
              your requests.
            </div>
            <div
              className={styles["subscribe-input-and-submit-button-container"]}
            >
              <div className={styles["subscribe-input-container"]}>
                <input type="text" placeholder="Enter email here" />
              </div>
              <div className={styles["submit-button-container"]}>
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className={styles["subscription-hero-container"]}>
            <div className={styles["subscription-hero-image"]}>
              <img src={subscriptionHero} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["instagram-wall-container"]}>
        <InstagramWall />
      </div>
    </div>
  );
}

export default LandingPage;
