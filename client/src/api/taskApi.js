import { ax } from '../components/hooks/useAxiosLoader';

export const updateTask = async (task) => {
    try{
        const response = await ax.post(`/api/task/complete/${task._id}`);
        if(response){
            return response;
        }
    }catch(err){
        console.log(err);
    }
}

export const getTasks = async () => {
    try{
        // const data = await ax.get(`/api/task&?currentPage=${filter.currentPage}&pageSize=${filter.pageSize}`);
        return await ax.get(`/api/task`);

    }catch(err){
        console.log(err);
    }
}