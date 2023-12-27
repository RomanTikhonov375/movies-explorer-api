import { Router } from 'express';
import userRouter from './users';
import movieRouter from './movies';
import auth from '../middlewares/auth';
import { checkSigninValidation, checkSignupValidation } from '../middlewares/joiAuthValidation';
import { createUser, login } from '../controllers/users';

const router = Router();
router.post('/signup', checkSignupValidation, createUser);
router.post('/signin', checkSigninValidation, login);
router.use('/movies', auth, movieRouter);
router.use('/users', auth, userRouter);

export default router;
