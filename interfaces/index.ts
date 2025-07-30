export interface PropertyProps {
  name: string;
  rating: number;
  image: string;
  description: string;
  address: {
    city: string;
    country: string;
  };
  price: number;
  category: string[];
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
}
