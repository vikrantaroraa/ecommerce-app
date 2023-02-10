export interface CartProductProps {
  id: number;
  brand: string;
  category: string;
  name: string;
  price: string;
  quantity: number;
  color: string;
  imageSrc: string;
  sizesAvailable: string[];
  selectedSize: string;
  onRemoveFromCartClick: () => void;
  onMoveToWishlistClick: () => void;
  onIncreaseQuantityClick: () => void;
  onDecreaseQuantityClick: () => void;
}
