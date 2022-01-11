import React from "react"
import TaskDetails from "./TaskDetails"
import {updateTask, getTasks} from '../../../api/taskApi';
import PubSub from "pubsub-js";
import { AlertEvent, AlertTypes } from "../../commons/EventAlert";

const TaskList = ({tasks}) => {
    const updateTask = async (task, index) => {
        const response = await updateTask(task);
        PubSub.publish(AlertEvent,{
            message: "Task updated succesfully",
            type: AlertTypes.success
        });
    }
    return(
        <div>
            {tasks.map((task, index)=>{
                return <TaskDetails key={index} {...task} onConfirm={() => updateTask(task, index)} />
            })}
        </div>
    )
}



export default TaskList;