import TrendingProducts from "src/components/TrendingProducts/TrendingProducts";
import blackShorts from "src/assets/images/Women/Shorts/black-shorts/black-shorts-1.svg";
import userReviewsHero from "src/assets/images/user-reviews-hero.svg";
import styles from "src/pages/LandingPage/LandingPage.module.css";
import CollectionsCard from "src/components/CollectionsCard/CollectionsCard";
import greyCollection from "src/assets/images/grey-collection.svg";
import tshirtCollection from "src/assets/images/tshirt-collection.jpg";
import subscriptionHero1 from "src/assets/images/subscriptions-hero.svg";
import subscriptionHero2 from "src/assets/images/subscriptions-hero-updated.svg";
import landingHeroYellow from "src/assets/images/landing-page-hero/hero-yellow.png";
import landingHeroYellowOriginal from "src/assets/images/landing-page-hero/hero-yellow-original.png";
import landingHeroYellowOriginalNew from "src/assets/images/landing-page-hero/hero-yellow-original-new.png";
import landingHeroGreenOriginal from "src/assets/images/landing-page-hero/hero-green-original.png";
import landingHeroGreen from "src/assets/images/landing-page-hero/hero-green.png";
import ShopByCategory from "src/components/ShopByCategory/ShopByCategory";
import InstagramWall from "src/components/InstagramWall/InstagramWall";
import HomepageFeatureTiles from "src/components/HomepageFeatureTiles/HomepageFeatureTiles";
import { useState } from "react";

const landingHeroImagesArray = [
  {
    icon: landingHeroYellow,
    text: "No prints is the new cool. Choose from the wide range of solid clothes.",
  },
  {
    icon: landingHeroGreen,
    text: "Choose from a wide variety of ambient colors.",
  },
  {
    icon: landingHeroYellow,
    text: "Get your product made from the fabric of your choice.",
  },
];

const homePageFeatureTilesPropsData = [
  {
    primaryText: "Shop Products",
    secondaryText: "Delivered right to your door",
    navigationUrl: "/",
  },
  {
    primaryText: "Get Any Color",
    secondaryText: "Choose the color you want",
    navigationUrl: "/",
  },
  {
    primaryText: "Fabric Of Choice",
    secondaryText: "Choose the fabric you want",
    navigationUrl: "/",
  },
];

const collectionsCardDataList = [
  {
    imageSrc: greyCollection,
    redirectUrl: "/",
    collectionInfo: "All gray collection to meet your gray personality",
    textAlignment: "left",
    imageAlignment: "center",
  },
  {
    imageSrc: tshirtCollection,
    redirectUrl: "/",
    collectionInfo: "Wide range of regular t-shirts is on 50% off",
    textAlignment: "right",
    imageAlignment: "left",
  },
];

function LandingPage() {
  const [activeHeroImageAndTextIndex, setActiveHeroImageAndTextIndex] =
    useState(0);
  return (
    <div className={styles["landing-page"]}>
      <div className={styles["app-introduction-and-feature-tiles-container"]}>
        <div className={styles["main-heading-and-hero-image"]}>
          <div className={styles["main-heading-and-info-container"]}>
            <div className={styles["main-heading"]}>
              {/* No prints is new cool. Choose from the wide range of solid
              clothes. */}
              {landingHeroImagesArray[activeHeroImageAndTextIndex].text}
            </div>
            {/* <div className={styles["horizontal-line-and-message"]}>
              <div className={styles["hr-container"]}>
                <hr />
              </div>
              <p className={styles["message"]}>
                No prints is new cool! Choose from <br /> the wide range of
                solid clothes for <br /> sophisticated you.
              </p>
            </div> */}
          </div>
          <div className={styles["hero-icon-container"]}>
            <div className={styles["hero-image-container"]}>
              <img
                src={landingHeroImagesArray[activeHeroImageAndTextIndex].icon}
                alt="hero-icon"
              />
            </div>
          </div>
        </div>
        <div className={styles["feature-tiles-container"]}>
          {homePageFeatureTilesPropsData.map(
            ({ primaryText, secondaryText, navigationUrl }, index) => {
              return (
                <HomepageFeatureTiles
                  primaryText={primaryText}
                  secondaryText={secondaryText}
                  navigationUrl={navigationUrl}
                  onMouseOver={() => setActiveHeroImageAndTextIndex(index)}
                />
              );
            }
          )}
        </div>
      </div>
      <div className={styles["trending-products-container"]}>
        <TrendingProducts />
      </div>
      <div className={styles["collections-card-container"]}>
        {collectionsCardDataList.map(
          ({
            imageSrc,
            redirectUrl,
            collectionInfo,
            textAlignment,
            imageAlignment,
          }) => {
            return (
              <CollectionsCard
                imageSrc={imageSrc}
                redirectUrl={redirectUrl}
                collectionInfo={collectionInfo}
                textAlignment={textAlignment}
                imageAlignment={imageAlignment}
              />
            );
          }
        )}
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
              We collect and process your personal data to better responsd to
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
              <img src={subscriptionHero2} />
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
