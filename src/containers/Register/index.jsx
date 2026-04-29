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
        name: yup.string().required('O nome é obrigatório'),
        email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
        password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('A senha é obrigatória'),

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
            await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
            });

            setStatus({ type: 'success', message: 'Usuário criado com sucesso' });
            setTimeout(() => {
                setStatus({ type: '', message: '' });
                navigate('/login');
            }, 2000);

        } catch (error) {
            setStatus({ type: 'error', message: 'Erro ao criar usuário, tente novamente' });
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
                <h2>Cadastro</h2>
                <Inputs>
                
                    <InputContainer>
                        <label>Nome:</label>
                        <input type="text" {...register("name")} />
                        <p>{errors.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email:</label>
                        <input type="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha:</label>
                        <input type="password" {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar Senha:</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors.confirmPassword?.message}</p>
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
                    {isSubmitting ? <Loader /> : 'Resgistrar-se'}
                </Button>
            </Form>
        </Container>
    )
}

export default Login