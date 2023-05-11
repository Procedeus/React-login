import styled from 'styled-components';

const InputCustomizado = styled.input`
    color: var(--text-color);
    font-size: 18px;
    background-color: var(--input-color);
    border: none;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    width: 100%;
    height: 50px;
    padding: 4px 8px;
    outline: none;

    input:placeholder{
        color: var(--text-color);
        font-size: 12px;
        opacity: 0.7;
    }

`
export default InputCustomizado;