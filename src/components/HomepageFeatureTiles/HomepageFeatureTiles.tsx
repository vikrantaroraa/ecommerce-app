import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomepageFeatureTilesProps } from "src/components/HomepageFeatureTiles/HomepageFeatureTiles.interface";
import styles from "src/components/HomepageFeatureTiles/HomepageFeatureTiles.module.css";

function HomepageFeatureTiles({
  primaryText,
  secondaryText,
  navigationUrl,
  onMouseOver,
}: HomepageFeatureTilesProps) {
  return (
    <div className={styles["homepage-feature-tile"]} onMouseOver={onMouseOver}>
      <div className={styles["text-container"]}>
        <div className={styles["primary-text"]}>{primaryText}</div>
        <div className={styles["secondary-text"]}>{secondaryText}</div>
      </div>
      <span>
        <FontAwesomeIcon icon={faArrowRight} style={{ width: "30px" }} />
      </span>
    </div>
  );
}

export default HomepageFeatureTiles;
