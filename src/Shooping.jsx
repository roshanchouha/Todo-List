import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import shoping from './image/shopping-bag.png';
import Add from './image/add.png';
import { useNavigate } from 'react-router-dom';
import UseDate from './component/UseDate';
import organize from './image/organizer.png';
import AddCircleIcon from '@mui/icons-material/AddCircle';

let deleteTask;
let  Del;
let Stask;
const allTask5 = (value) => {
    Stask = value;
}
function TaskItem({ task, onDelete ,onDelete2,time}) {
    const [isChecked, setIsChecked] = useState(false);

     
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        
       
    };
      
    return (
        <div className='taskDisplay'>
            <input
                className='Box'
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                onClick={onDelete2}
            />
            <div
                className='TaskContain'
                style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
                data-toggle="tooltip" data-placement="top" title={time}
            >
                {task}
            </div>
            <button className='btn btn-warning' onClick={onDelete}>
                <DeleteOutlineIcon className='fs-2' />
            </button>
        </div>
    );
}

const Shopping = () => {
    let array;
    const [tasks, setTask] = useState([]);
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const id = JSON.parse(auth);
    const UID = id[0].UID;


    const OpenAddLink = () => {
        navigate("/add")
    }
    const getTaskDetail = async () => {
        let result = await fetch(`http://localhost:4500?category="Shopping"&UID=${UID}`);
        result = await result.json();
        setTask(result);


        // console.log(result);
       
        console.log(tasks.length);

        setTask(result);
    };

      deleteTask = async (id,number) => {
        let result = await fetch(`http://localhost:4500/Delete/${id}`, {
            method: 'Delete'
        });
        result = await result.json();
        console.log(number);
        if (result) {
              
            if (number == 1)
                alert('Task is deleted');
            else
                alert('Task Complete')
            getTaskDetail();
        }

    };
    allTask5(tasks.length);
    useEffect(() => {
        getTaskDetail();
    }, []);

    return (

     <div>
            <div className='contain'>
                <div className="myCanvas">
                </div>
                <div className="myCanvas2" > </div>
                <div id='mobileContainer'> 
                <div className='Mobile'>
                    <div className='heading '>
                        <div className='topicon'>
                            <div>
                                <h1 onClick={() => navigate("/home")} ><KeyboardBackspaceIcon className='fs-1 fw-bolder head' /></h1>
                            </div>
                            <div className='Time'><UseDate /></div>
                        </div>
                        <div className='PHead m-4' >
                            <div>
                                <img className='sun' src={shoping} alt="" width="40px" height="40px" />
                            </div>
                            <div className='PDetail'>
                                <h4 className='mt-3'> {tasks.length} Task</h4>
                                <h1 className='task2'>Shopping</h1>
                            </div>

                        </div>
                    </div>
                    <div className='Body1 overflow-auto'>
                        <div className='tasks'>
                        {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TaskItem
                        key={task.TID}
                        task={task.task}
                        time={task.Time}
                        onDelete={() => deleteTask(task.TID,1)}
                        onDelete2={() => deleteTask(task.TID,2)}
                    />
                ))
            ) : (
                // Render a message if there are no tasks
                <div className='Start'>
                    <>
                        <div className='Start'>
                            <img className='SIcon' src={organize} alt="" width="100px" height="100px" />
                            <div className='Details'>
                                <h3 className='text-center fw-bolder'>Get Organized Your Life</h3>
                                <p className='text-center fs-5'>tudy is a simple and effective to-do list and task manage app whice helps you manage time</p>
                            </div>
                        </div>
                    </>
                </div>
            )}

                        </div>
                    </div>
                    <div className='add'>
                    <AddCircleIcon id='AddIcon'  onClick={OpenAddLink}   /> 
                    </div>
                </div>
                </div>
            </div>
        </div>

        
    );
};

export default Shopping;
 
 
export { Stask };




























 