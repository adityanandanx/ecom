require("dotenv").config();
import { prisma } from "./db";

global.afterAll(async () => {
  await prisma.$disconnect();
});
