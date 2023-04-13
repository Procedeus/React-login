import React from "react";
import Signin from "../Pages/signin"
import Signup from "../Pages/signup"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    );
}
export default Routering;