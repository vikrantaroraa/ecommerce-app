import { AddressCardProps } from "src/components/AddressCard/AddressCard.interface";
import styles from "src/components/AddressCard/AddressCard.module.css";

function AddressCard({
  name,
  mobileNumber,
  pinCode,
  address,
  apartment = "House No. 13",
  city,
  state,
  checked,
  onAddressCardClick,
}: AddressCardProps) {
  return (
    <label onClick={onAddressCardClick}>
      <div className={styles["address-card"]}>
        <div className={styles["radio-button-container"]}>
          <input checked={checked} type="radio" name="address" />
        </div>
        <div className={styles["address-container"]}>
          <div className={styles["person-name"]}>{name}</div>
          <div className={styles["address-field"]}>{address}</div>
          <div className={styles["address-field"]}>{apartment}</div>
          <div className={styles["address-field"]}>
            {city}, {state} - {pinCode}
          </div>
          <div className={styles["address-field"]}>
            Phone Number:- {mobileNumber}
          </div>
        </div>
      </div>
    </label>
  );
}

export default AddressCard;
