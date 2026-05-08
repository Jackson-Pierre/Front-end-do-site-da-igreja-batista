import { useState, useEffect } from "react";
import axios from 'axios';
import * as Yup from 'yup';
import { PatternFormat } from 'react-number-format'; // Trocado para compatibilidade com React 19

import { Container, Box, MainContent, InputContainer, Button, Form, SucessModal} from "./style.js";

import { CardText } from "../../components/CardText/index.jsx";
import { ModalContact } from "../../components/ModalContact/index.jsx";
import { CardsContacts } from "../../components/CardsContacts/index.jsx";
import { SimpleModal } from "../../components/SimpleModal/index.jsx";

function Oracao() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [errors, setErrors] = useState({});
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const schema = Yup.object().shape({
        name: Yup.string()
            .required('O nome é obrigatório')
            .min(3, 'O nome deve ter pelo menos 3 caracteres')
            .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'O nome deve conter apenas letras'),
        phone: Yup.string()
            .required('O WhatsApp é obrigatório')
            .test('len', 'Telefone incompleto', (val) => {
                const digits = val?.replace(/\D/g, ''); 
                return digits?.length === 11;
            }),
        message: Yup.string()
            .required('O pedido de oração não pode estar vazio')
    });

    useEffect(() => {
        if (showSuccessModal) {
            const timer = setTimeout(() => {
                setShowSuccessModal(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showSuccessModal]);

    async function handleSubmit(e) {
        e.preventDefault();
        setErrors({}); 

        const dataToValidate = { name, phone, message };

        try {
            await schema.validate(dataToValidate, { abortEarly: false });
            setIsSending(true);

            const cleanPhone = phone.replace(/\D/g, '');

            await axios.post(`${import.meta.env.VITE_API_URL}/prayers`, { 
                name: name.trim(), 
                phone: cleanPhone, 
                message: message.trim() 
            });

            setShowSuccessModal(true);
            setName('');
            setPhone('');
            setMessage('');
            
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const validationErrors = {};
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                setErrors(validationErrors);
            } else {
                console.error('Erro ao enviar:', err);
            }
        } finally {
            setIsSending(false);
        }
    }

    return (
        <Container>
            <Box>
                <MainContent>
                    <SimpleModal 
                        title="Deixe seu Pedido de Oração"
                        text="A Palavra de Deus nos ensina que devemos levar tudo a Ele em oração. Este é um momento para você abrir seu coração e apresentar seu pedido. Estaremos juntos em oração, crendo que Deus pode agir em todas as situações."
                    />

                    {showSuccessModal && (
                        <SucessModal>
                            <div>
                                <p>Sua Oração foi enviada ao Pastor</p>
                            </div>
                        </SucessModal>
                    )}

                    <Form onSubmit={handleSubmit}>
                        <InputContainer>
                            <label>Nome Completo:</label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu nome"
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </InputContainer>

                        <InputContainer>
                            <label>Seu Whatsapp:</label>
                            <PatternFormat 
                                format="(##) #####-####" 
                                value={phone} 
                                onValueChange={(values) => setPhone(values.formattedValue)}
                                type="text"
                                placeholder="(65) 99999-9999"
                            />
                            {errors.phone && <p>{errors.phone}</p>}
                        </InputContainer>

                        <InputContainer>
                            <label>Pedido de Oração:</label>
                            <textarea 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Escreva aqui o seu pedido de oração com detalhes..."
                            />
                            {errors.message && <p>{errors.message}</p>}
                        </InputContainer>

                        <Button type="submit" disabled={isSending}>
                            {isSending ? 'Enviando...' : 'Enviar Pedido'}
                        </Button>
                    </Form>
                </MainContent>

                <CardText
                    title="Quer conversar diretamente com um Pastor?"
                    text="Entre em contato conosco. Um pastor vai conversar e te ajudar com seu pedido"
                    onClickBotao={() => setIsOpen(true)}
                    labelBotao="Entrar em Contato"
                />
                
                <ModalContact isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
                    <CardsContacts />
                </ModalContact>
            </Box>
        </Container>
    );
}

export default Oracao;