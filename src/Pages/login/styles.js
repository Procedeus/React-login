import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: var(--background-color);
`

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-lite-color);
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    gap: 30px 0px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;

    h1{
        color: var(--text-color);
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
`