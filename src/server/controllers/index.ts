import { Router, static as exstatic } from 'express';
import { resolve } from 'path';

import DevRouter from './dev';
import MainRouter from './main';

const isProduction = process.env.NODE_ENV === 'production';
const router = Router();

router.use(exstatic(resolve('./build/public')));
router.use(exstatic(resolve('./static')));

if (!isProduction) router.use('/dev', DevRouter);
router.use(MainRouter);

export default router;
