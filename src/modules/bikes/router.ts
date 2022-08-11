import { Router } from 'express';
import wrapAsync from 'src/http/wrapAsync';
import { createBike, editBike, getAllBykes, getBike } from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';
import verifyManager from 'src/http/middlewares/auth/verifyManager';

const userRouter = Router();

userRouter.get('/',
  wrapAsync(getAllBykes));

userRouter.post('/',
  verifyToken,
  verifyManager,
  wrapAsync(createBike));

userRouter.get('/:bikeId',
  verifyToken,
  wrapAsync(getBike));

userRouter.put('/:bikeId',
  verifyToken,
  wrapAsync(editBike));

export default userRouter;
