import React, {useState, useEffect, Fragment} from 'react';
import TaskList from './TaskList';
import { SubTitle } from '../../commons/StyledComponents';
import { getTasks } from '../../../api/taskApi';

const PAGE_SIZE = 10;


const fetchApiData = async (setData) => {
    try {
      const fetchedData = await getTasks();
  
      if (fetchedData) {
        setData(fetchedData.data);
      }
    } catch (error) {}
  };

const TaskPage = () => {
    const [data, setData] = useState({});
    const [update, setupdate] = useState(false);

    useEffect( async() => {
        await fetchApiData(setData);
    },[]);

    useEffect(async () => {
        if(update){
            await fetchApiData(setData);
            setupdate(false);
        }
    },[update])

    return(
        <Fragment>
            <SubTitle>TASK LIST</SubTitle>
            <TaskList pageSize={PAGE_SIZE} tasks={data.results} refresh={() => setupdate(true)}/>
        </Fragment>
    )
}

export default TaskPage;