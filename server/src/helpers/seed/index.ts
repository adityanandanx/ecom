import { prisma } from "../../db";
import seedDb from "./seedDb";

seedDb()
  .then(async () => {
    console.log("Database seeded successfully with 10 products.");
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error("Error seeding database:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
