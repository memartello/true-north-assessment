import express, { Request, Response } from 'express';
import { Router } from 'express';

const app = express();
const router = Router();

router.get('/tasks', (req: Request,res: Response) => {
    res.status(200).json({message:'Fetched and saved in typescript'})
});

app.use('/',router);

app.listen(5000, () => {
    console.log('server listening on port 5000')
});