export interface WishListProductCardProps {
  id: number;
  productName: string;
  brandName: string;
  actualPrice: string;
  price: string;
  imageSrc: string;
  onRemoveFromWishListClick: () => void;
  onMoveToCartClick: () => void;
}
