import { ObjectId } from "mongodb"

export const taskCollectionName = 'task'

export interface ITask{
    _id: ObjectId,
    description: String,
    title: String,
    completed: Boolean
    createdAt: Date,
}