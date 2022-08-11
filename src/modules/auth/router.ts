import { Router } from 'express';
import validateUserSignup from 'src/http/middlewares/requestValidations/userSignup';
import validateUserLogin from 'src/http/middlewares/requestValidations/userLogin';
import wrapAsync from 'src/http/wrapAsync';
import { 
  userSignup, 
  userLogin, 
  verifyUserToken,
  getUserProfile
} from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const authRouter = Router();

authRouter.post('/signup',
  validateUserSignup,
  wrapAsync(userSignup));

authRouter.post('/login',
  validateUserLogin,
  wrapAsync(userLogin));

authRouter.post('/checkToken',
  verifyToken,
  wrapAsync(verifyUserToken));

authRouter.get('/profile',
  verifyToken,
  wrapAsync(getUserProfile));

export default authRouter;
