import styles from "src/components/Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-section"]}>
        <span className={styles["footer-section-heading"]}>
          About Blackhole
        </span>
        <span>Information</span>
        <span>Store Location</span>
      </div>
      <div className={styles["footer-section"]}>
        <span className={styles["footer-section-heading"]}>Help</span>
        <span>FAQ</span>
        <span>Return Policy</span>
        <span>Privacy Policy</span>
        <span>Accessibility</span>
      </div>
      <div className={styles["footer-section"]}>
        <span className={styles["footer-section-heading"]}>Account</span>
        <span>Membership</span>
        <span>Profile</span>
        <span>Coupons</span>
      </div>
      <div className={styles["footer-section"]}>
        <span className={styles["footer-section-heading"]}>Newsletter</span>
        <span>
          Sign up and be the first
          <br />
          in the know about new
          <br /> arrivals, promotions, in
          <br />
          store events and more.
        </span>
        <span className={styles["footer-section-heading"]}>Subscribe Now</span>
      </div>
      <div className={styles["footer-section"]}>
        <span className={styles["footer-section-heading"]}>
          Connect With Us
        </span>
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Instagram</span>
        <span>Youtube</span>
      </div>
    </div>
  );
};

export default Footer;
