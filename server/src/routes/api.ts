import express from 'express';
import taskRoute from './task';

const app = express();

app.use('/task',taskRoute);

export default app;