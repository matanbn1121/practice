import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export function authenticateToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  try {
    const token = req.cookies.token ;

    if (!token) {
      console.warn("⛔ טוקן לא נמצא - ייתכן שמשתמש לא מחובר.");
      res.status(401).json({ message: "⛔ אין טוקן, יש להתחבר" });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

    console.log("✅ טוקן מאומת בהצלחה");
    console.log("🔑 Decoded token:", decoded);

    req.user = { userId: decoded.userId };
    next();

  } catch (error) {
    console.error("⛔ טוקן לא תקין או פג תוקף:", error);
    res.status(403).json({ message: "⛔ טוקן לא תקין" });
  }
}

export default authenticateToken;
