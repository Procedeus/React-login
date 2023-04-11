import styled from 'styled-components';

const InputCustomizado = styled.input`
    color: #FFF;
    font-size: 18px;
    background-color: transparent;
    border: 2px solid #6a6a6a;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    height: 50px;
    padding: 4px 8px;

    input::placeholder{
        color: #FFF;
        font-size: 12px;
        opacity: 0.7;
    }

`
export default InputCustomizado;