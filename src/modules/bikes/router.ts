import { Router } from 'express';
import wrapAsync from 'src/http/wrapAsync';
import { createBike, editBike, getAllBykes, getBike } from './controller';
import verifyToken from 'src/http/middlewares/auth/verifyToken';

const userRouter = Router();

userRouter.get('/',
  verifyToken,
  wrapAsync(getAllBykes));

userRouter.post('/',
  verifyToken,
  wrapAsync(createBike));

userRouter.get('/:bikeId',
  verifyToken,
  wrapAsync(getBike));

userRouter.put('/:bikeId',
  verifyToken,
  wrapAsync(editBike));

export default userRouter;
