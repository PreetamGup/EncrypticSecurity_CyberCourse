import { Router } from "express";
import { blogFormController, allBlogsController } from "../controller/blogController.js";
import { authentication } from "../middleware/authMiddleware.js";
const router = Router();

router.post('/addblogform', authentication ,blogFormController);
router.get('/getblogs', allBlogsController);


export default router