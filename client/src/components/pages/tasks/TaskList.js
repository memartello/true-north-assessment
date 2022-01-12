import React from "react"
import TaskDetails from "./TaskDetails"
import { updateTask } from '../../../api/taskApi';
import PubSub from "pubsub-js";
import { AlertEvent, AlertTypes } from "../../commons/EventAlert";

const TaskList = ({tasks, refresh}) => {
    const onCompleteTask = async (task, index) => {
        const response = await updateTask(task);
        if(response){
            PubSub.publish(AlertEvent,{
                message: "Task updated succesfully",
                type: AlertTypes.success
            });
            refresh();
        }else{
            PubSub.publish(AlertEvent,{
                message: "Something went wrong!",
                type: AlertTypes.danger
            });
        }
    }
    return(
        <div>
            {tasks && tasks.map((task, index)=>{
                return <TaskDetails key={index} {...task} onConfirm={() => onCompleteTask(task, index)} />
            })}
        </div>
    )
}



export default TaskList;