import { Router } from "express";
import { getHomePage } from "../controllers/homeUser";
import authenticateToken from "../../src/controllers/middleware/autoMiddleware";

const router = Router();

router.get("/home", authenticateToken, getHomePage);

export default router;
