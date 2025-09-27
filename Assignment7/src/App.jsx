import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

import TaskContainer from './components/TaskContainer';
import Footer from './components/Footer';

import Tasklogall from './components/Tasklogall';
import { ToastContainer } from 'react-toastify';

const App = () => {

    const [tasks, setTasks] = useState([]);
    
    const [finishedpc, setFinishedpc] = useState([]);
    const [countresolved, setcountresolved] = useState(0);

    const [taskinfo, setTask] = useState([]);
    const [progresscount, setProgressCount] = useState(0);

    useEffect(() => {
        const fetchTasks = async () => {
            
            const response = await fetch('/task.json'); 
            const data = await response.json();
            
            setTasks(data.tasks);
        };
fetchTasks();
        
    }, []); 

    return (
        <div>
            <Navbar></Navbar>
            <Banner countresolved={countresolved} progresscount={progresscount}></Banner>

            <div className='2xl:hidden block'> 
                <Tasklogall setcountresolved={setcountresolved} 
                        countresolved={countresolved} 
                        setProgressCount={setProgressCount} 
                        progresscount={progresscount} 
                        setFinishedpc={setFinishedpc} 
                        finishedpc={finishedpc} 
                        taskinfo={taskinfo}></Tasklogall>
            </div>

            <div className='flex justify-center'>
              <Suspense fallback='hey'>
                  <div className='flex 2xl:justify-start justify-center mt-8'>
                    <TaskContainer 
                        finishedpc={finishedpc} 
                        progresscount={progresscount} 
                        setProgressCount={setProgressCount} 
                        taskinfo={taskinfo} 
                        setTask={setTask} 
                        tasks={tasks} 
                    />
                </div>
              </Suspense>
              

                <div className='2xl:block hidden'>
                    <Tasklogall 
                        setcountresolved={setcountresolved} 
                        countresolved={countresolved} 
                        setProgressCount={setProgressCount} 
                        progresscount={progresscount} 
                        setFinishedpc={setFinishedpc} 
                        finishedpc={finishedpc} 
                        taskinfo={taskinfo}
                    />
                </div>
            </div>

            <div className='2xl:block mt-5'>
                <Footer></Footer>
            </div>
            
            <ToastContainer />
        </div>
    );
};

export default App;


