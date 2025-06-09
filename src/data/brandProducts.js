// src/data/brandProducts.js

const brandProducts = [
  {
    id: 1,
    name: "Товар 1",
    description: "Описание товара 1",
    price: 40,
    colors: ["gray", "pink", "yellow"],
    sizes: ["Small", "Medium", "Large"],
    image: "src/assets/main-photo.png",
    additionalPhotos: [
      "src/assets/main-photo.png",
      "src/assets/add-photo2.png"
    ],
    brand: "Brand A"
  },
  {
    id: 2,
    name: "Товар 2",
    description: "Описание товара 2",
    price: 50,
    colors: ["black", "white"],
    sizes: ["Medium", "Large", "X-Large"],
    image: "some-other-product.png",
    additionalPhotos: [
      "some-other-product-1.png",
      "some-other-product-2.png"
    ],
    brand: "Brand A"
  },
  // ... другие товары
];

export default brandProducts;
