import React from "react";
import Signin from "../Pages/signin"
import Signup from "../Pages/signup"
import Home from "../Pages/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    );
}
export default Routering;