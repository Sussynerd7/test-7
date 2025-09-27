import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TaskCards = ({ task, setTask, taskinfo, setProgressCount, progresscount }) => {
    
    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    const handleCardClick = () => {
        
        if (hasBeenClicked) {
            return;
        }

        
        setHasBeenClicked(true);

        
        setTask([...taskinfo, task]);
        setProgressCount(progresscount + 1);
        toast("Task In Progress");
    };

    return (
        <div
            
            onClick={handleCardClick}
            
            className={`
                mx-2 2xl:w-[513px] bg-white shadow-2xl rounded-xl 2xl:h-[150px] border border-gray-300 p-3 
                ${hasBeenClicked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-xl transition-shadow duration-300'}
            `}
        >
            <div className='font-semibold flex justify-between mb-2'>
                <h1 className='2xl:text-xl text-lg'>{task.title}</h1>
                <h1 className={`${
                    task.status === "open"?"bg-green-200":"bg-yellow-200"
                } rounded-4xl p-2`}>
                    <span className='relative right-[3px] bottom-[2px] bg-green-400 rounded-[50px] text-[10px] text-green-400 p-1'> --- </span>
                    {task.status}
                </h1>
            </div>
            <h1 className='mt-2 mb-2 2xl:mb-9'>{task.description}</h1>
            <div className='flex mt-5 justify-between'>
                <div className='flex gap-3'>
                    <h1>#{task.id}</h1>
                    <h1 className={`font-semibold ${
                        task.priority === "CRITICAL" ? "text-red-600" :
                        task.priority === "HIGH" ? "text-red-500" :
                        task.priority === "MEDIUM" ? "text-yellow-600" :
                        task.priority === "LOW" ? "text-green-600" :
                        "text-gray-600"
                    }`}>
                        {task.priority}
                    </h1>
                </div>
                <div className='flex gap-3'>
                    <h1>{task.name}</h1>
                    <h1>{task.dateofcreation}</h1>
                </div>
            </div>
        </div>
    );
};

export default TaskCards;