import { WithAuthProp } from "@clerk/clerk-sdk-node";
import { NextFunction, Request, Response } from "express";

export const onlyAllowRole = (role: CustomJwtSessionClaims["role"]) => {
  return async (
    req: WithAuthProp<Request>,
    res: Response,
    next: NextFunction
  ) => {
    if (req.auth.claims?.role === role) {
      next();
      return;
    } else {
      res.status(401);
      next(new Error("Unauthorized"));
    }
  };
};
