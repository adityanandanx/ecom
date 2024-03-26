import { Router, Request, Response } from "express";
import { ProductController } from "./product.controller";
import { authMiddleware } from "../../middlewares/auth";
import { RequireAuthProp } from "@clerk/clerk-sdk-node";
import { onlyAllowRole } from "../../middlewares/only-allow-role";

const productRouter = Router();
const productController = new ProductController();

productRouter.post(
  "/",
  authMiddleware(),
  onlyAllowRole("admin"),
  (req: RequireAuthProp<Request>, res, next) =>
    productController.create(req, res, next)
);
productRouter.get("/", (req, res, next) =>
  productController.getAll(req, res, next)
);
productRouter.get("/:id", (req, res, next) =>
  productController.getById(req, res, next)
);
productRouter.delete(
  "/:id",
  authMiddleware(),
  onlyAllowRole("admin"),
  (req: RequireAuthProp<Request>, res, next) =>
    productController.delete(req, res, next)
);
productRouter.put(
  "/:id",
  authMiddleware(),
  onlyAllowRole("admin"),
  (req: RequireAuthProp<Request>, res, next) =>
    productController.update(req, res, next)
);

export default productRouter;
