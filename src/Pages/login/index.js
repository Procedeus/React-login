import {useState} from 'react';
import { Container, Form } from './styles'
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/index'
import {validateUsername, validatePassword} from '../../Utils/validadores'
import UserServices from '../../services/api'
import { NavLink, useNavigate} from 'react-router-dom'

function Signin() {
    const [loading, setLoading] = useState();
    const [form, setForm] = useState([]);
    const userServices = new UserServices();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            setLoading(true);
            await userServices.Login(form);
            alert("Logado com Sucesso!!");
            navigate('/home');
            setLoading(false);
        }
        catch(error){
            if (error.response) {
                alert(`Erro ${error.response.status}: ${error.response.data.error}`);
              } else {
                alert('Erro desconhecido: '+ error);
            }
            setLoading(false);
        }
    }

    const validarInput = () => {
        return validateUsername(form.username) && validatePassword(form.password);
    }

  return (
    <Container>
        <Form>
            <h1>Faça o seu Login</h1>
            <Input
                name='username'
                placeholder='Usuário'
                onChange={handleChange}
                type='text'
            />
            <Input
                name='password'
                placeholder='Senha'
                onChange = {handleChange}
                type='password'
            />
            <Button
                type='submit'
                text='Entrar'
                onClick={handleSubmit}
                disabled={loading === true || !validarInput()}
            />
            <div>
                <p>Não possui conta?</p>
                <NavLink to="/signup">Cadastrar </NavLink >
            </div>
        </Form>
    </Container>
  );
}

export default Signin;
