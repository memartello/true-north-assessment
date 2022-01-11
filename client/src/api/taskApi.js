import { ax } from '../components/hooks/useAxiosLoader';
const URL = "" 

export const updateTask = async (task) => {
    try{
        const result = await ax.put(URL,task);
    }catch(err){
        console.log(err);
    }
}

export const getTasks = async (filter, setData) => {
    try{
        const data = await ax.get(URL);
        setData(data);
    }catch(err){
        console.log(err);
    }
}