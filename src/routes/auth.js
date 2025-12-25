import { celebrate } from 'celebrate';
import { Router } from 'express';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
  resetPassword,
} from '../controllers/authControllers.js';
import {
  loginSchema,
  registerSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/validations.js';

const authRouter = Router();

authRouter.post('/auth/register', celebrate(registerSchema), registerUser);

authRouter.post('/auth/login', celebrate(loginSchema), loginUser);
authRouter.post('/auth/logout', logoutUser);
authRouter.post('/auth/refreshUser', refreshUserSession);
// POST / auth / request - reset - email;
authRouter.post(
  '/auth/request-reset-email',
  celebrate(requestResetEmailSchema),
  requestResetEmail,
);
// POST / auth / reset - password;
authRouter.post(
  '/auth/reset-password',
  celebrate(resetPasswordSchema),
  resetPassword,
);

export default authRouter;
