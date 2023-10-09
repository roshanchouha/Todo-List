import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { faReact, faJs, faHtml5, faCss3Alt, faNode, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import image from '../image/sun.png';
import { useNavigate } from 'react-router-dom';

const Category = (props) => {
    const navigate = useNavigate();

    
     const OpenFile=(key)=>{
        if(key==1)
        {
           navigate("/Today");
        }
        else if(key==2)
        {
           navigate("/Planned");
        }else if(key==3)
        {
             navigate("/Personal")
        }
        else if(key==4)
        {
             navigate("/Work")
        } 
        else if(key==5)
        {
             navigate("/shopping")
        } 
        else if(key==6)
        {
             navigate("/other")
        } 
        // }else if(key==3)
        // {
        //      navigate("/Personal")
        // }
     }
    return (
        <div onClick={() => OpenFile(props.id) }>
            <div className=' bodybox border border-1'>
                <div className=''>
                    <img className='sun' src={props.image} alt="" width="40px" height="40px" />
                </div>
                <div className='Detail'>
                    <h3  className='head mt-3'>{props.heading}</h3>
                    <h5 className='task'>{props.task} Task</h5>
                </div>
                <div className='dot'>
                    <FontAwesomeIcon className='  fs-3  fw-bolder  ' icon={faEllipsisVertical} />
                </div>
            </div>
             
        </div>
    );
}

export default Category;
