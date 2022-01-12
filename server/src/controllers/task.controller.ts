import { Request, Response} from 'express';
import { collections } from '../config/dbConnection';
import { ITask } from '../models/Task';
import { ObjectId } from 'mongodb';

export const get = async (req: Request, res: Response) => {
    try{
        const tasks = (await collections.task?.find({}).toArray()) as ITask[];
        const response = {
            count: tasks.length,
            results: tasks,
            previous: "",
            next: ""
        }
        return res.status(200).json(response);
    } catch(error){
        console.log(error);
    }
}

export const complete = async (req : Request, res: Response) => {
    try {
        const id = req?.params?.taskId;    
        
        // const { completed, _id }: ITask = req.body as ITask;
        const query = { _id: new ObjectId(id) };
        
        const result = await collections.task?.updateOne(query, { $set: {completed: true} } );
        result
        ? res.status(200).send({message:`Successfully updated task with id ${id}`})
        : res.status(304).send({message:`Task with id: ${id} not updated`});
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
}