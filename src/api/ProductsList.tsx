import { ProductCardProps } from "src/components/ProductCard/ProductCard.interface";

const ProductsList = [
  {
    id: 1,
    name: "KALA CHASMA",
    price: 1000,
    description: "Ye hai kala chasma",
    memory: 64,
    currency: "INR",
    details: `
          64 GB ROM
          15.49 cm (6.1 inch) Liquid Retina HD Display
          12MP + 12MP | 12MP Front Camera
          A13 Bionic Chip Processor`,
  },
  {
    id: 2,
    name: "laal chadi",
    price: 500,
    description: "Ye hai kala chasma",
    memory: 64,
    currency: "INR",
    details: `
          64 GB ROM
          15.5 cm (6.102 inch) Display
          12MP Rear Camera | 7MP Front Camera
          A12 Bionic Chip Processor
          iOS 13 Compatible`,
  },
  {
    id: 3,
    name: "jalebi",
    price: 50,
    description: "Ye hai meethi jalebi",
    memory: 128,
    currency: "INR",
    details: `
          128 GB ROM
          15.49 cm (6.1 inch) Super Retina XDR Display
          12MP + 12MP | 12MP Front Camera
          A14 Bionic Chip with Next Generation Neural Engine Processor
          Ceramic Shield
          IP68 Water Resistance
          All Screen OLED Display`,
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000,
    description: "ye hai jaapani joota",
    memory: 128,
    currency: "INR",
    details: `
          128 GB ROM
          11.94 cm (4.7 inch) Retina HD Display
          12MP Rear Camera | 7MP Front Camera
          A13 Bionic Chip with 3rd Gen Neural Engine Processor
          Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
          Fast Charge Capable
          Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
  },
  {
    id: 5,
    name: "kala chasma-2",
    price: 1000,
    description: "Ye hai kala chasma-2",
    memory: "64 - 2",
    currency: "INR",
    details: `
          64 GB ROM
          15.49 cm (6.1 inch) Liquid Retina HD Display
          12MP + 12MP | 12MP Front Camera
          A13 Bionic Chip Processor`,
  },
  {
    id: 6,
    name: "laal chadi-2",
    price: 500,
    description: "Ye hai kala chasma-2",
    memory: "64 - 2",
    currency: "INR",
    details: `
          64 GB ROM
          15.5 cm (6.102 inch) Display
          12MP Rear Camera | 7MP Front Camera
          A12 Bionic Chip Processor
          iOS 13 Compatible`,
  },
  {
    id: 7,
    name: "jalebi-2",
    price: 50,
    description: "Ye hai meethi jalebi-2",
    memory: "128 - 2",
    currency: "INR",
    details: `
          128 GB ROM
          15.49 cm (6.1 inch) Super Retina XDR Display
          12MP + 12MP | 12MP Front Camera
          A14 Bionic Chip with Next Generation Neural Engine Processor
          Ceramic Shield
          IP68 Water Resistance
          All Screen OLED Display`,
  },
  {
    id: 8,
    name: "japani joota-2",
    price: 10000,
    description: "ye hai jaapani joota-2",
    memory: "128 - 2",
    currency: "INR",
    details: `
          128 GB ROM
          11.94 cm (4.7 inch) Retina HD Display
          12MP Rear Camera | 7MP Front Camera
          A13 Bionic Chip with 3rd Gen Neural Engine Processor
          Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
          Fast Charge Capable
          Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
  },
  {
    id: 9,
    name: "kala chasma-3",
    price: 1000,
    description: "Ye hai kala chasma-3",
    memory: "64 - 3",
    currency: "INR",
    details: `
          64 GB ROM
          15.49 cm (6.1 inch) Liquid Retina HD Display
          12MP + 12MP | 12MP Front Camera
          A13 Bionic Chip Processor`,
  },
  {
    id: 10,
    name: "laal chadi-3",
    price: 500,
    description: "Ye hai kala chasma-3",
    memory: "64 - 3",
    currency: "INR",
    details: `
          64 GB ROM
          15.5 cm (6.102 inch) Display
          12MP Rear Camera | 7MP Front Camera
          A12 Bionic Chip Processor
          iOS 13 Compatible`,
  },
  {
    id: 11,
    name: "jalebi-3",
    price: 50,
    description: "Ye hai meethi jalebi-3",
    memory: "128 - 3",
    currency: "INR",
    details: `
          128 GB ROM
          15.49 cm (6.1 inch) Super Retina XDR Display
          12MP + 12MP | 12MP Front Camera
          A14 Bionic Chip with Next Generation Neural Engine Processor
          Ceramic Shield
          IP68 Water Resistance
          All Screen OLED Display`,
  },
  {
    id: 12,
    name: "japani joota-3",
    price: 10000,
    description: "ye hai jaapani joota-3",
    memory: "128 - 3",
    currency: "INR",
    details: `
          128 GB ROM
          11.94 cm (4.7 inch) Retina HD Display
          12MP Rear Camera | 7MP Front Camera
          A13 Bionic Chip with 3rd Gen Neural Engine Processor
          Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)
          Fast Charge Capable
          Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
  },
];

export default ProductsList;
