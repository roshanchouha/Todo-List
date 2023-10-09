import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useHistory } from 'react-router-dom';
import Planned from '../Planned';
import UseDate from './UseDate';

 
const Add = () => {

 
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const array = JSON.parse(auth);
    const UID = array[0].UID;
    console.log(UID);
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("Planned");
    const [date,setDate]= useState("");
    console.log(date);
    const curDate = new Date();
    const Month = curDate.getMonth()+1<= 9?('0'+(curDate.getMonth() + 1)):(curDate.getMonth()+1);
    const day =  curDate.getDate(); 
    let DTime = `${curDate.getFullYear()}-${Month}-${day}`;
    // let Time = curDate.getDay()+24;
    let Time = date;
       const addTask = async () => {

        if (!task.trim()) {
            alert("Task cannot be empty");
            return; // Prevent form submission if the task is empty
          }

          if (!category.trim()) {
            alert("category cannot be empty");
            return; // Prevent form submission if the task is empty
          }

          if (!date.trim()) {
            alert("Date cannot be empty");
            return; // Prevent form submission if the task is empty
          }

        let result = await fetch('http://localhost:4500', {
            method: 'post',
            body: JSON.stringify({  category, task, Time , UID }),
            headers: {
                'content-type': 'application/json'
            }
        });
        result = await result.json();
        if (result) {
            alert("Task is Add")
        }
        console.log(result);

         
    }
    return (
        <div>
            <div classNameName='contain'>
                <div className="myCanvas">
                </div>
                <div className="myCanvas2" ></div>
                <div id='mobileContainer'> 
                <div className='Mobile'>
                    <div className='heading '>
                        <div className='topicon'>
                            <div>
                                <h1 onClick={() => navigate("/home")} ><KeyboardBackspaceIcon className='fs-1 fw-bolder head' /></h1>
                            </div>
                            <div className='Time'><UseDate/></div>
                        </div>
                        <div className='PHead m-4' >
                            {/* <div>
                            <img className='sun' src="" alt="" width="40px" height="40px" />
                        </div> */}
                            <div className='PDetail'>
                                {/* <h4 className='mt-3'> 8 Task</h4> */}
                                <h1 className='task2'>Add Your Remainder</h1>
                            </div>

                        </div>
                    </div>
                    <div className='Body1 overflow-auto'>
                        <div className='tasks'>
                            <form  >

                                <div className="form-outline mb-4">
                                    <input   type="text" id="form5Example1" className="form-control fs-5" onChange={(event) => setTask(event.target.value)} value={task}    required/>
                                    
                                    <label className="form-label fs-4" for="form5Example1">ADD TASK</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <select class="SELECT selectpicker border border-1  w-100 fs-5 " onChange={(event) => setCategory(event.target.value)} required>
                                        <optgroup label="Choose">
                                            <option selected value=""></option>
                                            <option value="Planned">Planned</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Work">Work</option>
                                            <option value="Shopping">Shopping</option>
                                            <option value="Other">Other</option>
                                        </optgroup>
                                    </select>

                                    <label className="form-label fs-4" for="form5Example1">CATEGORY</label>
                                </div>
                                <div>
                                    <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
                                        <input placeholder="Select date" type="date" id="example" className="form-control fs-5" onChange={(e)=>setDate(e.target.value)} required/>
                                            <label for="example" className='fs-4'>Date</label>
                                         
                                    </div>
                                </div>
                                <button type="submit" className="button btn   btn-block col-3 fs-4 text-decoration-none" onClick={addTask}>ADD</button>
                            </form>
                        </div>
                    </div>

                </div>
              </div>
            </div>
        </div>
    );
}

export default Add;
