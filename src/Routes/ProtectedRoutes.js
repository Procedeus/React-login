import { useEffect } from 'react';
import UserServices from '../services/api';
import {useNavigate} from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate();
    useEffect(() => {
        fetchUserData = () => {
          const userService = new UserServices();
          const userAuth = userService.userAuth();
          if (!userAuth) {
            navigate('/signin');
          }
        }
        fetchUserData();
      }, [navigate]);
    return children;
}

export default ProtectedRoutes;