import { Router } from "express";
import { applyFormController, feedbackformController, applyFormData, feedbackformData,updateFormData } from "../controller/formController.js";
import { authentication } from "../middleware/authMiddleware.js";

const router = Router();

router.post('/applyform', applyFormController);
router.post('/feedbackform', feedbackformController);
router.get('/applyform', authentication,applyFormData);
router.get('/feedbackform', authentication ,feedbackformData);
router.patch('/formUpdate/:id',authentication,  updateFormData);


export default router