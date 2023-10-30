import { Router } from "express";
import { applyFormController, feedbackformController, applyFormData, feedbackformData } from "../controller/formController.js";

const router = Router();

router.post('/applyform', applyFormController);
router.post('/feedbackform', feedbackformController);
router.get('/applyform', applyFormData);
router.get('/feedbackform', feedbackformData);

export default router