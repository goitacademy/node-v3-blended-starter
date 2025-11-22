import { celebrate } from 'celebrate';
import { Router } from 'express';
import { registerSchema } from '../validations/authValidation.js';
import { registerUser } from '../controllers/authController.js';

const router = Router();

router.post('/auth/register', celebrate(registerSchema), registerUser);

export default router;
