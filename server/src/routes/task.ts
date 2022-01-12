import { Router } from "express";
import * as TaskController from '../controllers/task.controller';

const router = Router();

router.get('/', TaskController.get)
router.post('/complete/:taskId', TaskController.complete);

export default router;