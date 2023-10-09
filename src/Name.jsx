import React, { useEffect, useState } from 'react';
import organize from './image/organizer.png';
import Add from './image/add.png';
import { useNavigate } from 'react-router-dom';
import UseDate from './component/UseDate';
import { Link } from 'react-router-dom';
import logo from './image/to-do-list.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

let FirstName;
const Name = () => {
    const navigate = useNavigate();
    const [email,SetEmail]=useState();
    const [password,setPassword]=useState();
    
    const handle=(e)=>{
        e.preventDefault();
    }
 
     
    useEffect(()=>{      
        const auto = localStorage.getItem('user');
        if(auto)
         { 
            navigate('/home');
         }
      });
    const collect = async () => {
         

        let result = await fetch("http://localhost:4500/user", {
            method: 'post', 
            body: JSON.stringify({email,password }),
            headers: {
                'content-type': 'application/json'
            },
        });
        result =await result.json(); 
        console.log(result);
        if(result.length>0)
         { 
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/home'); 
         }else if(result.result){
            alert("please enter valid credential ");
         }
         
        
    }
    
    return (
        <div>
            <div className='contain'>
                <div className="myCanvas"></div>
                <div className="myCanvas2" > </div>
                <div id='mobileContainer'> 
                <div className='Mobile bg-white'>
                    <div className='heading '>
                        <div className='topicon'>
                            <div   className=' d-flex justify-content-center align-items-center'>
                            <Link to="/" className=' text-decoration-none text-black' ><img className='sun' src={logo} alt="" width="50px" height="50px" /></Link>
                                <div className='fs-1 fw-bolder'> <Link to="/" className=' text-decoration-none text-white' >tudy</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className='Start1'>
                        <form onSubmit={handle}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" onChange={(r)=> SetEmail(r.target.value)}    value={email} class="form-control fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
                             </div>
                             <br />
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" onChange={(r)=> setPassword(r.target.value)} value={password} class="form-control fs-5" id="exampleInputPassword1" placeholder="password"/>
                            </div>
                             
                              <br />
                              <button  onClick={collect} className='button btn  mx-5 fs-4'>   Start  </button> 
                              <div class="form-group mt-5">
                                <Link to='/signup' className='text-center  text-decoration-none' > <p className='fs-5'>Are you new in tudy ? </p></Link>   
                               </div>
                        </form>
                    </div>

                </div>
             </div>

            </div>
        </div>
    );
}

export default Name;
 
