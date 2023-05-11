import styled from 'styled-components';

const ButtonCustomizado = styled.input`
    color: var(--text-color);
    font-size: 20px;
    border: 30px;
    background-color: var(--button-color);
    border-radius: 8px;
    width: 100%;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    cursor: pointer;
    

    ${props => props.disabled === false &&`
    &:hover{
        background-color: var(--background-lite-color);
        color: var(--text-color);
    }`}
    ${props => props.disabled &&`
    opacity: 0.1;
    `}
`
export default ButtonCustomizado;