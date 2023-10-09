 import React from 'react';
import {Routes,Route } from "react-router-dom";
 import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
 import { faReact, faJs, faHtml5, faCss3Alt, faNode, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';
 import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
//  import image from './image/sun.png';
import Category from './component/category';
import details from './component/data';
import Home from './home';
import Planned from './Planned';
import Personal from './Personal';
import Work from './Work';
import Add from './component/Add';
import Today from './Today';
import GetStart from './GetStart';
import Shooping from './Shooping';
import Other from './Other';
import Name from './Name';
import SignUp from './SIgnUp';
 
 const App = () => {
  return (
    <>
       <Routes>
          <Route exact path="/"  element={ <GetStart/>} />
          <Route exact path="/name"  element={ <Name/>} />
          <Route exact path="/signup"  element={ <SignUp/>} />
          <Route exact path="/home"  element={ <Home/>} /> 
          <Route exact path="/planned"  element={ <Planned/>} />
          <Route exact path="/personal"  element={ <Personal/>} />
          <Route exact path="/work"  element={ <Work/>} />
          <Route exact path="/today"  element={ <Today/>} />
          <Route exact path="/add"  element={ <Add/>} />
          <Route exact path="/shopping"  element={ <Shooping/>} />
          <Route exact path="/other"  element={ <Other/>} />
      </Routes>
    </>
  )}
 export default App;
 