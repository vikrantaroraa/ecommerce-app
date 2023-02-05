import styles from "src/components/CollectionsCard/CollectionsCard.module.css";
import { CollectionsCardProps } from "src/components/CollectionsCard/CollectionsCard.interface";
import { Link } from "react-router-dom";

function CollectionsCard({
  collectionInfo,
  imageSrc,
  redirectUrl,
  textAlignment,
  imageAlignment,
}: CollectionsCardProps) {
  return (
    <div className={styles["collections-card"]}>
      <div
        className={styles["collection-info-and-redirect-button"]}
        style={{ textAlign: textAlignment as any }}
      >
        <div className={styles["collection-info"]}>{collectionInfo}</div>
        <div className={styles["redirect-button"]}>
          <button>
            <Link to={redirectUrl}>Shop Now</Link>
          </button>
        </div>
      </div>
      <div
        className={styles["collections-image-container"]}
        style={{
          display: "flex",
          justifyContent: imageAlignment as any,
          // justifyContent: "flex-end",
        }}
      >
        <div className={styles["collections-image"]}>
          <img src={imageSrc} />
        </div>
      </div>
    </div>
  );
}

export default CollectionsCard;
