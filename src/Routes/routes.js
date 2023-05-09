import React from "react";
import Login from "../Pages/login"
import Signup from "../Pages/signup"
import Home from "../Pages/home"
import Logout from "../Pages/logout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </Router>
    );
}
export default Routering;