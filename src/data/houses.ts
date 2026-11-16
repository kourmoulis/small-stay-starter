export type House = {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
};

export const houses: House[] = [
  {
    id: "olive-house",
    name: "Olive House",
    description: "Wooden countryside house with veranda and olive tree view.",
    price: 85,
    capacity: 4,
    image: "/images/olive-house.jpg",
  },
  {
    id: "sellia-retreat",
    name: "Sellia Retreat",
    description: "Quiet retreat for 2, 2km from the sea, perfect for couples.",
    price: 65,
    capacity: 2,
    image: "/images/sellia-retreat.jpg",
  },
  {
    id: "family-lodge",
    name: "Family Lodge",
    description: "Spacious lodge for families, outdoor kitchen and hammocks.",
    price: 110,
    capacity: 6,
    image: "/images/family-lodge.jpg",
  },
];