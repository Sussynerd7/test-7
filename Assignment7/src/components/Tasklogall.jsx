import React from 'react';
import PcCards from './LogCards';
import Handlecompletpc from './Handlecompletpc';

const Tasklogall = ({setcountresolved,countresolved, taskinfo, finishedpc, setFinishedpc,progresscount,setProgressCount }) => {
    
    const inProgressTasks = taskinfo.filter(task => 
        !finishedpc.some(finishedTask => finishedTask.id === task.id)
    );

    return (
        <div className="flex-col 2xl:justify-end 2xl:flex 2xl:items-start">
            <div className='2xl:flex-col flex '>
               
                <div className='my-5 rounded-3xl max-h-[200px] px-7 py-3 w-[400px] overflow-y-auto'>
                    <h1 className='font-bold text-2xl'>Task Status</h1>
                    <p className='2xl:block hidden text-md'>Select In-progress Tasks to work on them</p>
                    <div className='space-y-5'> 
                        {inProgressTasks.map((tasks, index) => (
                            <PcCards 
                            setcountresolved={setcountresolved}
                             countresolved={countresolved}
                            setProgressCount={setProgressCount}
                            progresscount={progresscount}
                                finishedpc={finishedpc} 
                                setFinishedpc={setFinishedpc}  
                                key={index} 
                                tasks={tasks} 
                            />
                        ))}
                    </div>
                </div>

                <div className='my-5 rounded-3xl overflow-y-auto max-h-[200px] px-7 py-3 w-[400px]'>
                    <h1 className='font-bold text-2xl'>Resolved Tasks</h1>
                    <p className='text-md 2xl:block hidden'>Finished Tasks appear here</p>
                    <div className='space-y-5'>
                        {finishedpc.map((finishes, index) => (
                            <Handlecompletpc setcountresolved={setcountresolved}
                             countresolved={countresolved}
                            setProgressCount={setProgressCount}
                            progresscount={progresscount}
                                finishedpc={finishedpc} 
                                setFinishedpc={setFinishedpc}  
                                key={index} 
                                  finishes={finishes} />
                        ))}
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Tasklogall;


