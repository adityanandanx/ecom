import z from "zod";
import { prisma } from "../../db";
import { Product as TProduct } from "@prisma/client";

export const Product = prisma.product;
export type Product = TProduct;
export type ProductWithoutId = Omit<TProduct, "id">;
