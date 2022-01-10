import { Request, Response} from 'express';
import { collections } from '../config/dbConnection';
import { ITask } from '../models/Task';
import { ObjectId } from 'mongodb';

export const get = async (req: Request, res: Response) => {
    try{
        const tasks = (await collections.task?.find({}).toArray()) as ITask[];
        //count limit offset 
        return res.status(200).json({tasks: tasks, message: "Nuevo mensaje actualizado"})    
    } catch(error){
        console.log(error);
    }
    
}

//limit only model parameters 
export const update = async (req : Request, res: Response) => {
    try{
        const taskId =  new ObjectId(req.params.taskId);
        const result = (await collections.task?.findOneAndUpdate({_id: taskId}, { $set: req.body }));
        
        return res.status(200).json({result})
    }catch(error){
        console.log(error);
    }
}