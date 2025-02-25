import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined in .env");
}

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in .env");
}