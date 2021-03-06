import express from 'express';
import { connectToDatabase } from './config/dbConnection';
import apiRoutes from './routes/api';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

if(!process.env.PORT){
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(cors());
app.use(helmet());
app.use('/',apiRoutes);

try{
    connectToDatabase();
}catch(err){
    console.log(err);
    process.exit(1);
}


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})