import { Router } from "express";
import { loginController, registerController, logoutController } from "../controller/userController.js";


const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/logout", logoutController);


export default router