import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../interfaces/error-response";
import { Prisma } from "@prisma/client";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  let statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2025":
        statusCode = 404;
    }
    // console.log(err.code);
  }

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
}
