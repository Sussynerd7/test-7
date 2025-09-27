import React from 'react';
import TaskCards from './TaskCards';

const TaskContainer = ({ tasks, setTask, taskinfo, setProgressCount, progresscount, finishedpc }) => {
    // Filter tasks to exclude those that are in finishedpc
    const filteredTasks = tasks.filter(task => 
        !finishedpc.some(finishedTask => finishedTask.id === task.id)
    );
    
    return (
        <div className='2xl:grid 2xl:gap-8 2xl:grid-cols-2 space-y-3'>
            {filteredTasks.map(task => (
                <TaskCards 
                    key={task.id}
                    progresscount={progresscount} 
                    setProgressCount={setProgressCount} 
                    taskinfo={taskinfo} 
                    setTask={setTask} 
                    task={task}
                />
            ))}
        </div>
    );
};

export default TaskContainer;