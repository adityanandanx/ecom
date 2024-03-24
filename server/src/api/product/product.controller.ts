import { Request, Response, NextFunction } from "express";
import { IController } from "../../interfaces/controller";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

export class ProductController implements IController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.productService.create(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.productService.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.productService.getById(Number(req.params.id));
      if (!data) {
        res.status(404);
        throw new Error(`Product with id "${req.params.id}" does not exist`);
      }
      res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.productService.delete(Number(req.params.id));
      res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.productService.update(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  }
}
