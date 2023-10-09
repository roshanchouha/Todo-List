import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import Add from './image/add.png';
import logout from './image/turn-off.png';
//  import image from './image/sun.png';
import Category from './component/category';
import details from './component/data';
import { Ttask } from './Today';
import UseDate from './component/UseDate';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// import { Ptask } from './Planned';
// import { Petask } from './Personal';
// import Work, { Wtask } from './Work';
// import { Stask } from './Shooping';

var TLengt, Ptask, Petask, Wtask, Stask;
const Home = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const array = JSON.parse(auth);
  console.log(array);
  const [FName, setFName] = useState(array[0].fname);
  // const [FName, setFName] = useState(FirstName);
  const [tasks, setTask] = useState([]);
  const [Ttask, setTtask] = useState(0);
  const [Ptask, setPtask] = useState(0);
  const [Petask, setPetask] = useState(0);
  const [Wtask, setWtask] = useState(0);
  const [Stask, setStask] = useState(0);
  const [Otask, setOtask] = useState(0);


  const curDate = new Date();
  const Month = curDate.getMonth() + 1 <= 9 ? ('0' + (curDate.getMonth() + 1)) : (curDate.getMonth() + 1);
  const day = curDate.getDate() <= 9 ? ('0' + (curDate.getDate())) : (curDate.getDate());
  let DTime = `${curDate.getFullYear()}-${Month}-${day}`;

  const Logout = () => {
    localStorage.removeItem("user");
    navigate("/name")
  }

  const UID = array[0].UID;

  const getTaskDetail = async () => {
    let result6 = await fetch(`http://localhost:4500/all?date="${DTime}"&UID=${UID}`);
    result6 = await result6.json();
    setTtask(result6.length);
    // setFName(FirstName);

    let result = await fetch(`http://localhost:4500?category="Planned"&UID=${UID}`);
    result = await result.json();
    setPtask(result.length);

    let result2 = await fetch(`http://localhost:4500?category="Personal"&UID=${UID}`);
    result2 = await result2.json();
    setPetask(result2.length);

    let result3 = await fetch(`http://localhost:4500?category="Work"&UID=${UID}`);
    result3 = await result3.json();
    setWtask(result3.length);

    let result4 = await fetch(`http://localhost:4500?category="Shopping"&UID=${UID}`);
    result4 = await result4.json();
    setStask(result4.length);

    let result5 = await fetch(`http://localhost:4500?category="Other"&UID=${UID}`);
    result5 = await result5.json();
    setOtask(result5.length);

  }
  useEffect(() => {
    getTaskDetail();
  }, []);
  return (
    <>
      <div className='contain'>
        <div className="myCanvas">
        </div>
        <div className="myCanvas2" > </div>
        <div id='mobileContainer'>
          <div className='Mobile'>
            <div className='heading '>
              <div className='d-flex justify-content-between  align-items-center'>
                <div onClick={Logout} className=''  data-toggle="tooltip" data-placement="top" title="Logout">
                
                
                    <Button  className=' bg-white'  id='But'  ><img src={logout} alt="" width="20px" height="20px" /></Button>
                 
                   </div>

                <div className='Time'><UseDate /></div>
              </div>
              <div className=' mt-5' >
                <h4 className=' fw-bolder'   >Hello {FName}</h4>
                <p className='fs-4'>Today you have {Ttask} tasks</p>
              </div>
            </div>
            <div className='Body overflow-auto scrollbar   bordered-white  square thin' >
              {

                details.map((val, index) => {

                  if (val.id == 1) {
                    TLengt = Ttask;
                  }
                  else if (val.id == 2) {
                    TLengt = Ptask;
                  }
                  else if (val.id == 3) {
                    TLengt = Petask;
                  }
                  else if (val.id == 4) {
                    TLengt = Wtask;
                  }
                  else if (val.id == 5) {
                    TLengt = Stask;
                  }
                  else if (val.id == 6) {
                    TLengt = Otask;
                  }
                  return (

                    <Category
                      id={val.id}
                      image={val.image}
                      heading={val.heading}
                      task={TLengt}
                    />

                  )

                })
              }
              {/* <div className='add'>
              <img src={Add} alt="" width="40px" height="40px" onClick={() => {
                navigate("/add");
              }} />
            </div> */}
            </div>
          </div>
          <div className='add'>
            
         
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
