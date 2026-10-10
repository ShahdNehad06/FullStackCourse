export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "Headphone",
    price: 19.99,
    description: "This is the description for Headphone.",
  },
  {
    id: 2,
    name: "Laptop",
    price: 29.99,
    description: "This is the description for Laptop.",
  },
  {
    id: 3,
    name: "mouse",
    price: 39.99,
    description: "This is the description for mouse.",
  },
];
