import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --background-color: #1e1e20;
    --input-color: #524d51;
    --button-color: #e74c3c;
    --background-lite-color: #272125;
    --text-color: #FFF;

}

*{
    font-family: 'Signika Negative', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    background-color: var(--background-color);
}
`

export default GlobalStyle;