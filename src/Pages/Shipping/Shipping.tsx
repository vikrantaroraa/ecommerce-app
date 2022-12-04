import { useEffect, useState } from "react";
import AddressCard from "src/components/AddressCard/AddressCard";
import BillingComponent from "src/components/BillingComponent/BillingComponent";
import styles from "src/pages/Shipping/Shipping.module.css";
import addCardIcon from "src/assets/svg/addCardIcon.svg";
import { sortByPrefferedFromLocalStorage } from "src/utils/sortByPrefferedHelper";
import { UserAddress } from "src/components/AddressCard/AddressCard.interface";
import { savedAddressCardsFromDB } from "src/api/savedAddressCardsDB";

function Shipping() {
  const [shippingDetails, setShippingDetails] = useState<UserAddress[] | null>(
    null
  );
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [savedAddresses, setSavedAddresses] = useState<UserAddress[]>([]);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    mobileNumber: "",
    pinCode: "",
    address: "",
    apartment: "House No. 13",
    city: "",
    state: "",
  });

  const showSavedUserAddressesOnRender = () => {
    let sortedShippingMethods = null;
    // Fetching already saved cards to display on first render and also saving them to localStorage
    const savedUserAddresses = savedAddressCardsFromDB;
    setSavedAddresses(savedUserAddresses);
    localStorage.setItem("savedAddresses", JSON.stringify(savedUserAddresses));

    const prefferedShippingAddress = JSON.parse(
      localStorage.getItem("prefferedShippingAddress") as string
    );

    if (savedUserAddresses && prefferedShippingAddress) {
      sortedShippingMethods = sortByPrefferedFromLocalStorage(
        savedUserAddresses,
        prefferedShippingAddress
      );
    } else {
      sortedShippingMethods = savedUserAddresses;
    }

    setShippingDetails(sortedShippingMethods);
  };

  const showSavedUserAddressesOnNewAddressAddition = () => {
    let sortedShippingMethods = null;
    const savedUserAddresses = JSON.parse(
      localStorage.getItem("savedAddresses") as string
    );

    const prefferedShippingAddress = JSON.parse(
      localStorage.getItem("prefferedShippingAddress") as string
    );

    // We do not need to check if any condition because this runs when a new address is added so both the
    // variables savedUserAddresses and prefferedShippingAddress will be present in localStorage

    // NOTE -> We are still checking if savedUserAddresses because it was giving error in console that it can
    // read map of null
    if (savedUserAddresses && prefferedShippingAddress) {
      sortedShippingMethods = sortByPrefferedFromLocalStorage(
        savedUserAddresses,
        prefferedShippingAddress
      );
    } else {
      sortedShippingMethods = savedUserAddresses;
    }

    setShippingDetails(sortedShippingMethods);
  };

  const { name, mobileNumber, pinCode, address, apartment, city, state } =
    shippingAddress;

  const handleChange = (event: any) => {
    setShippingAddress({
      ...shippingAddress,
      [event.target.name]: event.target.value,
    });
  };

  const addToSavedAddresses = (event: any) => {
    // If we don't add event.preventDefault() here then on submitting the form it updates the page and sends
    // the form data in the URL
    event.preventDefault();
    setSavedAddresses([...savedAddresses, shippingAddress]);
    localStorage.setItem("savedAddresses", JSON.stringify(savedAddresses));
    localStorage.setItem(
      "prefferedShippingAddress",
      JSON.stringify(shippingAddress)
    );
    hideAddNewAddressForm(event);
  };

  const hideAddNewAddressForm = (event: any) => {
    const addressForm = document.getElementById("add-new-address-form");
    addressForm!.style.display = "none";
  };

  const showAddNewAddressForm = () => {
    const addressForm = document.getElementById("add-new-address-form");
    addressForm!.style.display = "block";
  };

  const updatePrefferedShippingAddress = (
    i: number,
    userAddress: UserAddress
  ) => {
    setSelectedIndex(i);
    localStorage.setItem(
      "prefferedShippingAddress",
      JSON.stringify(userAddress)
    );
  };

  useEffect(() => {
    showSavedUserAddressesOnRender();
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    showSavedUserAddressesOnNewAddressAddition();
    setSelectedIndex(0);
  }, [savedAddresses]);

  return (
    <div className={styles["shipping"]}>
      <div className={styles["address-cards-container"]}>
        <div className={styles["shipping-heading"]}>Add Address</div>
        <p className={styles["shipping-heading-text-message"]}>
          Please select your delivery address
        </p>
        {shippingDetails &&
          shippingDetails.map((userAddress, i) => {
            const isChecked = i === selectedIndex;
            const { name, mobileNumber, pinCode, address, city, state } =
              userAddress;
            return (
              <AddressCard
                name={name}
                mobileNumber={mobileNumber}
                pinCode={pinCode}
                address={address}
                city={city}
                state={state}
                checked={isChecked}
                onAddressCardClick={() =>
                  updatePrefferedShippingAddress(i, userAddress)
                }
              />
            );
          })}

        <div
          className={styles["add-new-shipping-card-button"]}
          onClick={() => showAddNewAddressForm()}
        >
          <div className={styles["add-card-icon-container"]}>
            <img src={addCardIcon} alt="add card icon" />
          </div>
          <div className={styles["add-new-shipping-card-text"]}>
            Add new shipping address
          </div>
        </div>

        <div className={styles["form-container"]} id="add-new-address-form">
          <div className={styles["add-new-address-form-heading"]}>
            Add New Address
          </div>
          <form onSubmit={(event) => addToSavedAddresses(event)}>
            <span className={styles["form-section-heading"]}>
              Contact Details
            </span>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Full Name"
              required
              onChange={(event) => handleChange(event)}
            />
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              placeholder="Mobile Number"
              inputMode="numeric"
              required
              onChange={(event) => handleChange(event)}
              maxLength={10}
              minLength={10}
            />
            <span className={styles["form-section-heading"]}>Address</span>
            <input
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              required
              onChange={(event) => handleChange(event)}
            />
            <input
              type="text"
              name="apartment"
              value={apartment}
              placeholder="Apartment (House No, Building, Street, Area) optional "
              onChange={(event) => handleChange(event)}
            />
            <input
              type="text"
              name="pinCode"
              value={pinCode}
              placeholder="PIN Code"
              inputMode="numeric"
              required
              onChange={(event) => handleChange(event)}
            />

            <input
              type="text"
              name="city"
              value={city}
              placeholder="City"
              required
              onChange={(event) => handleChange(event)}
            />
            <input
              type="text"
              name="state"
              value={state}
              placeholder="State"
              required
              onChange={(event) => handleChange(event)}
            />
            <div className={styles["form-button-container"]}>
              <button
                className={styles["cancel-button"]}
                onClick={(event) => hideAddNewAddressForm(event)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles["save-button"]}
                // onClick={(event) => addToSavedAddresses(event)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["bill-description"]}>
        <BillingComponent />
      </div>
    </div>
  );
}

export default Shipping;
