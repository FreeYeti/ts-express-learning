import express, { Router } from 'express';
import { list } from '../services/members';

const router: Router = express.Router();

router.use('/', list);

export default router;
