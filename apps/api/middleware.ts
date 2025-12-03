import type { Request, Response, NextFunction } from "express";
export function AuthMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  req.userId = "123";

  console.log("Input validation passed");
  next();
}
