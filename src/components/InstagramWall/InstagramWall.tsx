import styles from "src/components/InstagramWall/InstagramWall.module.css";
import instagramPost1 from "src/assets/images/instagram-wall-images/instagram-post-1.svg";
import instagramPost2 from "src/assets/images/instagram-wall-images/instagram-post-2.svg";
import instagramPost3 from "src/assets/images/instagram-wall-images/instagram-post-3.svg";
import instagramPost4 from "src/assets/images/instagram-wall-images/instagram-post-4.svg";
import InstagramPostCard from "src/components/InstagramPostCard/InstagramPostCard";

const instagramPostsList = [
  {
    imageUrl: instagramPost2,
  },
  {
    imageUrl: instagramPost1,
  },
  {
    imageUrl: instagramPost3,
  },
  {
    imageUrl: instagramPost4,
  },
];

function InstagramWall() {
  return (
    <div className={styles["instagram-wall"]}>
      <div className={styles["message-and-instagram-handle"]}>
        <div className={styles["message"]}>Follow us on Instagram</div>
        <div className={styles["instagram-handle"]}>@thestore</div>
      </div>
      <div className={styles["instagram-posts-grid-container"]}>
        {instagramPostsList.map(({ imageUrl }) => {
          return <InstagramPostCard imageUrl={imageUrl} />;
        })}
      </div>
    </div>
  );
}

export default InstagramWall;
