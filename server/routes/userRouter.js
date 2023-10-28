import { Router } from "express";
import { loginController, registerController } from "../controller/userController.js";


const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);


export default router