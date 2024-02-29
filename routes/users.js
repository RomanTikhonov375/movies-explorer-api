import { Router } from 'express';
import { updateProfile, getCurrentUser } from '../controllers/users';
import checkPatchUserValidation from '../middlewares/joiUserValidation';

const userRouter = Router();

userRouter.get('/me', getCurrentUser);
userRouter.patch('/me', checkPatchUserValidation, updateProfile);

export default userRouter;
