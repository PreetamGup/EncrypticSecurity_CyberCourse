import { Router } from "express";
import { blogFormController, allBlogsController } from "../controller/blogController.js";
const router = Router();

router.post('/addblogform', blogFormController);
router.get('/getblogs', allBlogsController);


export default router