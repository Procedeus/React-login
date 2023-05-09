import { useEffect } from 'react';
import UserServices from '../services/api';
import {useNavigate} from 'react-router-dom'

const ProtectedRoutes = ({children, setUserAuth}) => {
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchUserData(){
          const userService = new UserServices();
          try{
            const userAuth = await userService.UserAuth();
            setUserAuth(userAuth);
          }
          catch(error){
            if (error.response) {
              alert(`Erro ${error.response.status}: ${error.response.data.error}`);
            } else {
              alert('Erro desconhecido: '+ error);
            }
            navigate('/login');
          }
        }
        fetchUserData();
      }, [navigate, setUserAuth]);
      return children;
}

export default ProtectedRoutes;