import React, { useEffect, useState } from 'react';
import organize from './image/organizer.png';
import Add from './image/add.png';
import { useNavigate } from 'react-router-dom';
import UseDate from './component/UseDate';
import { Link } from 'react-router-dom';
import logo from './image/to-do-list.png'

const GetStart = () => {
    return (
        <div>
            <div className='contain'>
                <div className="myCanvas"></div>
                <div className="myCanvas2" > </div>
                <div id='mobileContainer'> 
                <div className='Mobile bg-white'>
                
                        <div className='topicon p-2'>
                            <div className=' d-flex justify-content-center align-items-center'>
                                <img className='sun' src={logo} alt="" width="40px" height="40px" />
                                <div className='fs-1 fw-bolder'>tudy</div>
                            </div>

                        </div>

                     
                    <div className='Start'>
                        <img className='SIcon' src={organize} alt="" width="100px" height="100px" />
                        <div className='Details'>
                            <h2 className='text-center fw-bolder'>Get Organized Your Life</h2>
                            <p className='text-center fs-5'>tudy is a simple and effective to-do list and task manage app whice helps you manage time</p>
                        </div>
                        <div>
                        <Link to="/name"  className=' text-decoration-none text-black'> <button className='button btn  mx-auto fs-4'>  Get Started   </button></Link>
                        </div>
                    </div>

                </div>
               </div>
            </div>
        </div>
    );
}

export default GetStart;
