import { Router } from "express";
import { logoutUser } from "../controllers/homeUser";
import { loginUser } from "../controllers/loginUser";
import registerUser from "../controllers/registerUser";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;
