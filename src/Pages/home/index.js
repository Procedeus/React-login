import ProtectedRoutes from "../../Routes/ProtectedRoutes";
import { Container, Header, Destaque } from './styles'
import { useState } from 'react';

function Home(){
    const [userAuth, setUserAuth] = useState(null);
    return (
        <ProtectedRoutes setUserAuth={setUserAuth}>
            <Container>
                <header>
                    <Header>
                        <h1>Bem-vindo(a)</h1>
                        <h2>{userAuth}</h2> 
                    </Header>
                </header>
                <main>
                    <Destaque>
                        <h2>Teste</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet mi ut dolor lobortis bibendum. Praesent commodo mi eu arcu rutrum, a malesuada nulla euismod. Vivamus id elit elit. Nunc eget ipsum nec dolor tempor sagittis vel non urna. Sed non ex nibh. Duis malesuada sapien sit amet leo fringilla scelerisque.</p>
                    </Destaque>
                </main>
                <footer>
                <ul>
                    <li><h1>Teste</h1></li>
                </ul>
                </footer>
            </Container>
        </ProtectedRoutes>
    );
}

export default Home;
