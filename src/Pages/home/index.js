import ProtectedRoutes from "./ProtectedRoutes";
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
