import { Router } from "express";
import { applyFormController, feedbackformController } from "../controller/formController.js";

const router = Router();

router.post('/applyform', applyFormController);
router.post('/feedbackform', feedbackformController);


export default router