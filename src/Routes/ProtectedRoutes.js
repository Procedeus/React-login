import React from 'react';
import UserServices from '../services/api';
import {useNavigate} from 'react-router-dom'

const userService =  new UserServices();

const ProtectedRoutes = ({children}) => {
    const navigate =  useNavigate();
    const userAuth = userService.userAuth();
    return userAuth ? children : navigate('/signin');
}

export default ProtectedRoutes;