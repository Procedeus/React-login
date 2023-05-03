import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(){
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/signin');
    }, [navigate]);
}

export default Logout;