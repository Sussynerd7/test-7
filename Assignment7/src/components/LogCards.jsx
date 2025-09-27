import React from 'react';
import { toast } from 'react-toastify';

const PcCards = ({setcountresolved,countresolved, tasks, finishedpc, setFinishedpc,setProgressCount,progresscount }) => {
    
    return (
        <div className='bg-white rounded-xl border-2 border-black shadow-2xl 2xl:w-[300px] w-[140px] px-[20px] py-[12px]'>
            <h1 className='text-xl font-semibold'>{tasks.title}</h1>
            <button onClick={() => {             
                setFinishedpc([...finishedpc, tasks]); 
                setProgressCount(progresscount-1);
                setcountresolved(countresolved+1);
                toast("Task was Completed");
            }} className='btn btn-primary w-full'>Complete</button>
        </div>
    );
};

export default PcCards;