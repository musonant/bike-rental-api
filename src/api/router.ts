import { Router } from 'express';
import authRouter from 'src/modules/auth/router';
import userRouter from 'src/modules/user/router';

const baseRouter = Router();

baseRouter.use('/auth', authRouter);
baseRouter.use('/users', userRouter);

export default baseRouter;
