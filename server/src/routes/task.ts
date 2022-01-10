import { Router } from "express";
import * as TaskController from '../controllers/task.controller';

const router = Router();

router.get('/', TaskController.get)
router.put('/:taskId', TaskController.update);

export default router;