import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Components/Dashoard"
import FirstPage from "./Components/FirstPage"
import SecondPage from "./Components/SecondPage"
import ThirdPage from "./Components/ThirdPage"
import SpinBtn from "./Components/SpinBtn"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
 
         <Routes>
         <Route path="/" element={<FirstPage />}/>
           <Route path='secondPage' element={<SecondPage />} />
           <Route path="/ThirdPage" element={<ThirdPage />} />
           <Route path="/dashboard" element={<Dashboard />} />
       </Routes> 
    
        {/* <SpinBtn/> */}
    {/* <FirstPage/> */}
    {/* <SecondPage/> */}
    {/* <ThirdPage></ThirdPage> */}
    {/* <Dashboard></Dashboard> */}
     
    </>
  );
}

export default App;
