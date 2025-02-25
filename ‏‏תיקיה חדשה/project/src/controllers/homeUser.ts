import { Request, Response } from "express";
import UserModel from "../model/userModel";

import { AuthenticatedRequest } from "../controllers/middleware/autoMiddleware";

export async function getHomePage(req: AuthenticatedRequest, res: Response): Promise<any> {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ message: "❌ משתמש לא מחובר" });
    }

    const user = await UserModel.findById(userId).populate("address");

    if (!user) {
      return res.status(404).json({ message: "❌ משתמש לא נמצא" });
    }

    const address = user.address[0]; 

    res.status(200).json({
      headerName: user.name,
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      address: address ? {
        address: address.address,
        city: address.city,
        zipCode: address.zipCode,
      } : null,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ שגיאה בטעינת דף הבית" });
  }
}



export function logoutUser(req: Request, res: Response) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({ message: "✅ התנתקת בהצלחה" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ שגיאה בהתנתקות" });
  }
}
