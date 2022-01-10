import * as mongoDB from 'mongodb';
import { keys } from './keys';
import { taskCollectionName } from '../models/Task';


export const collections: { task?: mongoDB.Collection } = {}

export const connectToDatabase = async () => {

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(keys.DB_CONN_STRING as string);
    await client.connect();

    const db: mongoDB.Db = client.db(keys.DB_NAME);

    const taskCollection: mongoDB.Collection = db.collection(taskCollectionName);

    collections.task = taskCollection;

    console.log(`Connected to database: ${db.databaseName}`);
}