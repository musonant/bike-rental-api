import { Router } from 'express';
import wrapAsync from 'src/http/wrapAsync';
import { addUserToRole, updateUserProfile } from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const userRouter = Router();

userRouter.put('/profile',
  verifyToken,
  wrapAsync(updateUserProfile));

userRouter.put('/roles',
  verifyToken,
  wrapAsync(addUserToRole));

export default userRouter;
