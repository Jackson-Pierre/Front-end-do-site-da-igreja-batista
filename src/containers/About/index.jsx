import { useState, useEffect } from "react"

import { Container, Box, Fundamentals, ContainerButtons } from "./style"

import { Button } from "../../components/Button"
import { ModalContact } from "../../components/ModalContact"
import { CardsContacts } from "../../components/CardsContacts";
import BackgroundImageFull from "../../components/BackgroundImageFull/index.jsx";
import { TitleSection } from "../../components/TitleSection/index.jsx";
import { CardsPastors } from "../../components/CardsPastors/index.jsx";

function About() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <Box>
                <BackgroundImageFull $variant="quaternary">
                    <div>
                        <div>
                            <h2>Nossa história</h2>
                            <p>Uma jornada de fé, propósito e transformação ao longo dos anos</p>
                        </div>
                    </div>
                </BackgroundImageFull>

                <Fundamentals>
                    <TitleSection>Fundamento da Nossa Fé</TitleSection>
                    <p>“Nosso encargo é edificar uma Igreja de vencedores onde cada membro é um ministro e cada casa uma extensão da Igreja, conquistando assim a nossa geração para Cristo através das células que se multiplicam.”</p>
                </Fundamentals>

                <section>
                    <TitleSection>Nossa Liderança</TitleSection>
                    <CardsPastors />
                </section>

                <section>
                    <div>
                        <h2>Queremos te conhecer pessoalmente!</h2>
                        <p>Não importa onde você está em sua jornada de fé, há um logar reservado para você em nossa mesa.</p>
                    </div>
                    <ContainerButtons>
                        <a href="https://maps.app.goo.gl/doB8Zy2G1as89AMP7" target="_blank" rel="noreferrer">
                            <Button $variant="primary">
                                Visite-nos neste Domingo
                            </Button>
                        </a>
                        <Button $variant="secondary" onClick={() => setIsOpen(true)}>Falar com um Pastor</Button>
                    </ContainerButtons>
                </section>
            </Box>
            <ModalContact isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
                <CardsContacts />
            </ModalContact>
        </Container>
    )
}

export default About