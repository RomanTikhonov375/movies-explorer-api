import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { updateProfile, getCurrentUser } from '../controllers/users';

const userRouter = Router();

userRouter.get('/me', getCurrentUser);

userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string().min(2).max(30),
  }),
}), updateProfile);

export default userRouter;
