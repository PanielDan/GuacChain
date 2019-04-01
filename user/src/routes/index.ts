import { Router } from 'express';
import { accountRouter } from './account';

export const router = Router();

router.use('/account', accountRouter);