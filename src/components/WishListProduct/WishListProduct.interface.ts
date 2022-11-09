export interface WishListProductProps {
  id: number;
  name: string;
  price: string;
  quantity: number;
  imageSrc?: string;
  onRemoveFromWishListClick: () => void;
  onMoveToCartClick: () => void;
}
