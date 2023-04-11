import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Signika Negative', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
}
`

export default GlobalStyle;