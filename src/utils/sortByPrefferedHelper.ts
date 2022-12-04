import { UserAddress } from "src/components/AddressCard/AddressCard.interface";

export const sortByPrefferedWhenAddressesHaveUniqueId = (
  items: any[],
  prefferedItemId: string
) => [
  ...items.filter(({ id }) => id === prefferedItemId),
  ...items.filter(({ id }) => id !== prefferedItemId),
];

export const sortByPrefferedFromLocalStorage = (
  items: any[],
  prefferedShippingAddress: UserAddress
) => {
  let prefferedShippingAddressIsPresentInItems = false;
  items.map((savedAddress) => {
    if (
      JSON.stringify(savedAddress) === JSON.stringify(prefferedShippingAddress)
    ) {
      prefferedShippingAddressIsPresentInItems = true;
      return;
    }
  });
  if (prefferedShippingAddressIsPresentInItems) {
    return [
      ...items.filter(
        (item) =>
          JSON.stringify(item) === JSON.stringify(prefferedShippingAddress)
      ),
      ...items.filter(
        (item) =>
          JSON.stringify(item) !== JSON.stringify(prefferedShippingAddress)
      ),
    ];
  } else {
    return [prefferedShippingAddress, ...items];
  }
};

// export const sortByPrefferedFromLocalStorage2 = (
//   items: any[],
//   prefferedShippingAddress: UserAddress
// ) => [prefferedShippingAddress, ...items];
