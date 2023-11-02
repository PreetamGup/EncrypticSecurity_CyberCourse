import { Router } from "express";
import { applyFormController, feedbackformController, applyFormData, feedbackformData,updateFormData } from "../controller/formController.js";

const router = Router();

router.post('/applyform', applyFormController);
router.post('/feedbackform', feedbackformController);
router.get('/applyform', applyFormData);
router.get('/feedbackform', feedbackformData);
router.patch('/formUpdate/:id', updateFormData);


export default router