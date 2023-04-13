import ProtectedRoutes from "../../Routes/ProtectedRoutes";
import { Container } from './styles'

function Home(){
    return (
        <ProtectedRoutes>
            <Container>
                <h1>Bem-vindo(a)</h1>
            </Container>
        </ProtectedRoutes>
    );
}

export default Home;
