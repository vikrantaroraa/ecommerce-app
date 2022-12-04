export interface AddressCardProps {
  name: string;
  mobileNumber: string;
  pinCode: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  checked: boolean;
  onAddressCardClick?: () => void;
}

export interface UserAddress {
  name: string;
  mobileNumber: string;
  pinCode: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
}
