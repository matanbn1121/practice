import { Request, Response } from "express";
import UserModel from "../model/userModel";
import bcrypt from 'bcrypt';
import AddressModel from "../model/modelAdress";

export async function registerUser(req: Request, res: Response): Promise<any> {
  try {
    const { name, lastName, phone, email, password, address } = req.body;

    console.log("📥 נתונים שהתקבלו:", req.body);

    if (!name || !lastName || !phone || !email || !password || !address) {
      return res.status(400).json({ message: "❌ שדות חסרים בטופס" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "❌ משתמש עם האימייל הזה כבר קיים" });
    }

    const newAddress = await AddressModel.create({
      address: req.body.address,
      city: req.body.city,
      zipCode: req.body.zipCode,
    });

    console.log("🏠 כתובת נוצרה:", newAddress);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      lastName,
      phone,
      email,
      password: hashedPassword,
      address: [newAddress._id], 
    });

    console.log("✅ משתמש נוצר:", user);

    return res.status(201).json({ message: "✅ משתמש נוצר בהצלחה" });

  } catch (error: any) {
    console.error("❌ שגיאה בשרת:", error);
    return res.status(500).json({ message: "❌ שגיאה בשרת", error: error.message });
  }
}

export default registerUser;
