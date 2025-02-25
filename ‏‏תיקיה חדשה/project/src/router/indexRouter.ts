import { Router } from "express";
import authRouter from "../router/authRouter";
import userRouter from "../router/userRouter";

const router = Router();

router.use("/", authRouter);

router.use("/users", userRouter);

export default router;
