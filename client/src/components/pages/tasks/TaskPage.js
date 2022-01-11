import React, {useState, useEffect, Fragment} from 'react';
import TaskList from './TaskList';
import { SubTitle } from '../../commons/StyledComponents';
import { getTasks } from '../../../api/taskApi';

const data = {
    count: 100,
    results: [
        {title:"Task 1",description: "Kill Voldemort", completed: false},
        {title:"Task 2",description: "Learn patronus charm", completed: false},
        {title:"Task 3",description: "Ride a broom", completed: true},
        {title:"Task 3",description: "Ride a broom", completed: true},
        {title:"Task 3",description: "Ride a broom", completed: true},
        {title:"Task 3",description: "Ride a broom", completed: true},
        {title:"Task 3",description: "Ride a broom", completed: true},
        {title:"Task 3",description: "Ride a broom", completed: true},
        {title:"Task 3",description: "Ride a broom", completed: true},
        {title:"Task 4",description: "Win a Quiditch game", completed: false}
        
    ],
    next: "https://pokeapi.co/api/v2/pokemon?offset=300&limit=100",
    previous:""
}

const TaskPage = () => {
    useEffect( async() => {
        const response = await getTasks();
        if(response){
            console.log(response);
        }
    },[])
    return(
        <Fragment>
            <SubTitle>TASK LIST</SubTitle>
            <TaskList tasks={data.results}/>
        </Fragment>
    )
}

export default TaskPage;