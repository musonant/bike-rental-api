import { Router } from 'express';
import authRouter from 'src/modules/auth/router';
import userRouter from 'src/modules/user/router';
import bikesRouter from 'src/modules/bikes/router';

const baseRouter = Router();

baseRouter.use('/auth', authRouter);
baseRouter.use('/users', userRouter);
baseRouter.use('/bikes', bikesRouter);

export default baseRouter;
