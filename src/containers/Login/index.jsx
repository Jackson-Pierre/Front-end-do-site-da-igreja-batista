import { useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

import { Container, Form, InputContainer, Inputs, StatusMessage, Loader } from "./style.js";
import { Button } from "../../components/Button/index.jsx";

function Login() {
    const navigate = useNavigate();
    const [status, setStatus] = useState({ type: '', message: '' });

    const schema = yup.object({
        email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
        password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),
    }).required()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        try {
            setStatus({ type: '', message: '' });
            const response = await api.post('/sessions', {
                email: data.email,
                password: data.password
            });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('igreja:user', JSON.stringify(response.data));

            setStatus({ type: 'success', message: 'Acesso autorizado! Entrando...' });
            setTimeout(() => {
                setStatus({ type: '', message: '' });
                const user = response.data;
                if (user.admin) {
                    navigate('/admin/criar/eventos');
                } else {
                    navigate('/');
            }
            }, 2000);

        } catch (error) {
            setStatus({ type: 'error', message: 'E-mail ou senha incorretos.' });
            setTimeout(() => {
                setStatus({ type: '', message: '' });
            }, 2000);
        }
    }
    const isDisabled = isSubmitting || !!status.message;

    return (
        <Container>
            <h3>Acesso Restrito!</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <Inputs>
                    <InputContainer>
                        <label>Email:</label>
                        <input type="email" {...register("email")} autoComplete="off" />
                        <p>{errors.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha:</label>
                        <input type="password" {...register("password")} autoComplete="off" />
                        <p>{errors.password?.message}</p>
                    </InputContainer>
                </Inputs>

                {status.message && (
                    <StatusMessage $type={status.type}>
                        {status.message}
                    </StatusMessage>
                )}

                <Button 
                    type="submit" 
                    disabled={isDisabled}
                    style={{ 
                        opacity: isDisabled ? 0.5 : 1, 
                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                        marginTop: status.message ? '-20px' : '0' 
                    }}
                >
                    {isSubmitting ? <Loader /> : 'Entrar'}
                </Button>
            </Form>
        </Container>
    )
}

export default Login