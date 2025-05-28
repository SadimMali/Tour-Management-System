import { Router } from "express";
import { signIn } from "../controllers/auth.controlller.js";

const router = Router();

router.get("/sign-in", signIn);

export default router;
