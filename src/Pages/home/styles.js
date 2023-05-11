import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 720px;
    margin: 0 auto;
    header {
        height: 10vh;
      }
    main{
        height: 80vh;
    }
    h1{
        color: var(--text-color);
        font-size: 20px;
        font-weight: light;
    }
    h2{
        color: var(--button-color);
        font-size: 20px;
        font-weight: light;
    }
    p{
        color: var(--text-color);
        font-size: 16px;
        font-weight: bold;
    }
    a{
        color: var(--text-color);
        font-size: 16px;
        text-decoration: none;
    }
    footer{
        height: 10vh;
    }
    ul{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        list-style-type: none;
    }
`

export const Header = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
`

export const Destaque = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    text-align: center;
`
