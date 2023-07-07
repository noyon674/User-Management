//import files
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import DashBoard from '../Components/DashBoard';
import Error from '../Components/Error';
import Logout from "../Components/Logout";

//router element
const Router = ()=>{
    return(
        <BrowserRouter>
        {/*import layout */}
        {/*all routes here */}
           <Routes>
              <Route path="/" element = {<Home />}>Home</Route>
              <Route path="/register" element = {<Register />}>Register</Route>
              <Route path="/login" element = {<Login />}>Login</Route>
              <Route path="/dashboard" element = {<DashBoard />}>DashBoard</Route>
              <Route path="*" element = {<Error />}>Error</Route>
              <Route path="/logout" element={<Logout />}>Logout</Route>
           </Routes>
        </BrowserRouter>
    );
};

//export routes
export default Router;