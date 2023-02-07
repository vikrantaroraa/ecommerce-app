import { InstagramPostCardProps } from "src/components/InstagramPostCard/InstagramPostCard.interface";
import styles from "src/components/InstagramPostCard/InstagramPostCard.module.css";

function InstagramPostCard({ imageUrl }: InstagramPostCardProps) {
  return (
    <div className={styles["instagram-post-card"]}>
      <img src={imageUrl} />
    </div>
  );
}

export default InstagramPostCard;
