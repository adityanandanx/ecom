import { Router } from "express";
import { ProductController } from "./product.controller";

const productRouter = Router();
const productController = new ProductController();

productRouter.post("/", (req, res, next) =>
  productController.create(req, res, next)
);
productRouter.get("/", (req, res, next) =>
  productController.getAll(req, res, next)
);
productRouter.get("/:id", (req, res, next) =>
  productController.getById(req, res, next)
);
productRouter.delete("/:id", (req, res, next) =>
  productController.delete(req, res, next)
);
productRouter.put("/:id", (req, res, next) =>
  productController.update(req, res, next)
);

export default productRouter;
