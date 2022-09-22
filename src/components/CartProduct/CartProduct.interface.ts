export interface CartProductProps {
  id: number;
  name: string;
  price: string;
  quantity: number;
  imageSrc?: string;
  onRemoveFromCartClick: () => void;
  onMoveToWishlistClick: () => void;
  onIncreaseQuantityClick: () => void;
  onDecreaseQuantityClick: () => void;
}
