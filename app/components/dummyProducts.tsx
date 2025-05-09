type Product = {
  id: number;
  slug?: string;
  image: {
    front: string;
    back: string;
  };
  name: string;
  price: string;
  description: string;
};

const dummyProduct: Product[] = [
  {
    id: 1,
    image: {
      front: "/assets/images/products/kidsFront-1.webp",
      back: "/assets/images/products/kidsBack-1.webp",
    },
    name: "Lumos Jacket - Cement Grey",
    price: "£64.99",
    description: "Free publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual."
  },
  {
    id: 2,
    image: {
      front: "/assets/images/products/kidsFront-2.webp",
      back: "/assets/images/products/kidsBack-2.webp",
    },
    name: "Lumos Jacket - Black",
    price: "£44.99",
    description: "Enhance your outdoor activities with the Lumos Jacket in black. Its standard fit provides optimal comfort while the reflective detailing ensures visibility in low light conditions. The adjustable hood, vented back panel, and zip chest pocket make it functional, while the contrast under arm panel adds breathability. Stay comfortable with the elasticated sleeve cuff."
  },
  {
    id: 3,
    image: {
      front: "/assets/images/products/kidsFront-3.webp",
      back: "/assets/images/products/kidsBack-3.webp",
    },
    name: "Lumos Jacket - Cement Grey",
    price: "£34.59",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relyin"
  },
  {
    id: 4,
    image: {
      front: "/assets/images/products/kidsFront-4.webp",
      back: "/assets/images/products/kidsBack-4.webp",
    },
    name: "Men Jacket",
    price: "£78.59",
    description: "Enhance your outdoor activities with the Lumos Jacket in black. Its standard fit provides optimal comfort while the reflective detailing ensures visibility in low light conditions. The adjustable hood, vented back panel, and zip chest pocket make it functional, while the contrast under arm panel adds breathability. Stay comfortable with the elasticated sleeve cuff. Lishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
  },
  {
    id: 5,
    image: {
      front: "/assets/images/products/kidsFront-4.webp",
      back: "/assets/images/products/kidsBack-4.webp",
    },
    name: "Men Jacket",
    price: "£78.59",
    description: "Enhance your outdoor activities with the Lumos Jacket in black. Its standard fit provides optimal comfort while the reflective detailing ensures visibility in low light conditions. The adjustable hood, vented back panel, and zip chest pocket make it functional, while the contrast under arm panel adds breathability. Stay comfortable with the elasticated sleeve cuff. Lishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
  },
];

export const Products: Product[] = dummyProduct.map((product) => ({
  ...product,
  slug: product.name.toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-")
}));
