export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  imageSrc?: string;
  discount?: number;
  onAddToCartClick?: () => void;
  onAddToWishListClick?: () => void;
  strikeThroughPrice?: number;
}
