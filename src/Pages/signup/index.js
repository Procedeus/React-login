import {useState} from 'react';
import { Container, Form } from './styles'
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/index'
import {validateUsername , validateConfirmPassword, validateEmail} from '../../Utils/validadores'
import UserServices from '../../services/api'
import {useNavigate} from 'react-router-dom'

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
        setLoading(true);
        try{
            await userServices.Signup(form);
            alert("Cadastrado com Sucesso!!");
            navigate('/home');
        }
        catch(error){
            if (error.response) {
                alert(`Erro ${error.response.status}: ${error.response.data.error}`);
                } else {
                alert('Erro desconhecido: '+ error);
            }
        }
        setLoading(false);
    }

    const validarInput = () => {
        return validateUsername(form.username) && validateConfirmPassword(form.password, form.confirmPassword) && validateEmail(form.email);
    }

  return (
    <Container>
        <Form>
            <h1>Faça o seu Cadastro</h1>
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
            <Input
                name='confirmPassword'
                placeholder='Senha Novamente'
                onChange = {handleChange}
                type='password'
            />
            <Input
                name='email'
                placeholder='Email'
                onChange = {handleChange}
                type='email'
            />
            <Button
                type='submit'
                text='Entrar'
                onClick={handleSubmit}
                disabled={loading === true || !validarInput()}
            />
        </Form>
    </Container>
  );
}

export default Signin;
