import ProtectedRoutes from "../../Routes/ProtectedRoutes";
import { Container } from './styles'
import { useState } from 'react';

function Home(){
    const [userAuth, setUserAuth] = useState(null);
    return (
        <ProtectedRoutes setUserAuth={setUserAuth}>
            <Container>
                <h1>Bem-vindo(a) {userAuth}</h1>
            </Container>
        </ProtectedRoutes>
    );
}

export default Home;
