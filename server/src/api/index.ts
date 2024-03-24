import { Router } from "express";
import { MessageResponse } from "../interfaces/message-response";
import productRouter from "./product/product.route";

const api = Router();

api.get<{}, MessageResponse>("/", (req, res) => {
  res.json({ message: "API - OK" });
});

api.use("/product", productRouter);

export default api;
