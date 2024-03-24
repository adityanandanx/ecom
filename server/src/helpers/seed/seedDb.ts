import { prisma } from "../../db";

const seedDb = async () => {
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: [
      {
        title: "Crew Neck T-shirt",
        description: "Classic crew neck t-shirt made from soft cotton fabric.",
        price: 15.99,
      },
      {
        title: "Slim Fit Jeans",
        description:
          "Slim fit jeans made from stretch denim for added comfort.",
        price: 29.99,
      },
      {
        title: "Button-down Shirt",
        description: "Casual button-down shirt made from lightweight cotton.",
        price: 24.99,
      },
      {
        title: "V-neck T-shirt",
        description: "Stylish V-neck t-shirt made from breathable fabric.",
        price: 17.99,
      },
      {
        title: "Skinny Jeans",
        description: "Trendy skinny jeans designed for a sleek look.",
        price: 34.99,
      },
      {
        title: "Plaid Flannel Shirt",
        description: "Cozy plaid flannel shirt perfect for layering.",
        price: 27.99,
      },
      {
        title: "Graphic Tee",
        description: "Cool graphic tee featuring unique design prints.",
        price: 19.99,
      },
      {
        title: "Bootcut Jeans",
        description: "Classic bootcut jeans with a timeless silhouette.",
        price: 31.99,
      },
      {
        title: "Polo Shirt",
        description: "Essential polo shirt crafted from soft piqué cotton.",
        price: 22.99,
      },
      {
        title: "Denim Jacket",
        description:
          "Stylish denim jacket perfect for layering over any outfit.",
        price: 39.99,
      },
    ],
  });
};

export default seedDb;
