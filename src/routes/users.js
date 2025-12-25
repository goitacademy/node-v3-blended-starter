import { Router } from 'express';
import { updateUserAvatar } from '../controllers/authControllers.js';
import { upload } from '../middleware/multer.js';
import { authenticate } from '../middleware/authenticate.js';

const usersRouter = Router();

usersRouter.patch(
  '/users/me/avatar',
  authenticate,
  upload.single('avatar'),
  updateUserAvatar,
);

export default usersRouter;
