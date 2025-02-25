import { Request, Response } from "express";
import UserModel from "../model/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export async function loginUser(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
       res.status(400).json({ message: "❌ Invalid email or password" });
       return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
       res.status(400).json({ message: "❌ Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, 
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    }).status(200).json({ message: "✅ Successfully logged in" });

  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "❌ Server error" });
  }
}
