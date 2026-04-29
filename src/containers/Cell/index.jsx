import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

import { Container, Box, Title, Text, DownloadWord } from "./style.js";

import BackgroundImage from "../../components/BackgroundImage/index.jsx";
import {Button} from "../../components/Button/index.jsx";
import { CardText } from "../../components/CardText/index.jsx";

import { ModalContact } from "../../components/ModalContact/index.jsx";
import { CardsContacts } from "../../components/CardsContacts/index.jsx";

function Cell() {
    const [isOpen, setIsOpen] = useState(false);
    const [cultos, setCultos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCultos() {
            try {
                const { data } = await api.get("/cultos");
                const sorted = data.sort((a, b) => b.id - a.id);
                setCultos(sorted.slice(0, 1));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCultos();
    }, []);

    if (loading) return null;

    return (
        <Container>
            <Box>
                <BackgroundImage $variant="secondary">
                    <Title>Encontre uma Célula</Title>
                    <Text>
                        "Porque, onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles." (Mt 18:20)
                    </Text>
                </BackgroundImage>
                <DownloadWord>
                    <h2>Tenha acesso a palavra da célula</h2>
                    {cultos.length > 0 && (
                        <a href={cultos[0].url_word} target="_blank" rel="noopener noreferrer">
                            <Button $variant="primary">
                                Baixar Palavra
                            </Button>
                        </a>
                    )}
                </DownloadWord>
                <CardText 
                        title="Ainda não encontrou sua célula? "
                        text='Entre em contato conosco. Um pastor auxiliará você a encontrar o grupo mais próximo.'
                        onClickBotao={() => setIsOpen(true)}
                        labelBotao="Entrar em Contato"
                    />
            </Box>
            <ModalContact isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
                <CardsContacts />
            </ModalContact>
        </Container>
    );
}

export default Cell