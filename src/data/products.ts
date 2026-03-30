export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products = [
  {
    id: "1",
    name: "Black T-Shirt",
    price: 799,
    image: "/black.jpg",
  },
  {
    id: "2",
    name: "White Hoodie",
    price: 1499,
    image: "/hoodie.jpg",
  },
];
