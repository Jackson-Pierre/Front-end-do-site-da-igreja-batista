import { Container, Box, Alert, Content, ContainerButtons, SectionCell, SectionEvents, ImageCell, ContentCell, HeaderEvents, LinkEvents, ContentEvents } from "./style.js";

import { useNavigate } from "react-router-dom";

import IconsBg from "../../assets/icon/icons.svg"

import { BackgroundImage } from "../../components/BackgroundImage/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { TitleSection } from "../../components/TitleSection/index.jsx";
import { CardsCultos } from "../../components/CardsCultos/index.jsx";
import { CardsEvents } from "../../components/CardsEvent/index.jsx";
import { CardText } from "../../components/CardText/index.jsx";

function Home() {
    const navigate = useNavigate();
    return (
        <Container>
            <Box>
                <BackgroundImage>
                    <Alert>
                        <span>BEM-VINDO À NOSSA FAMÍLIA</span>
                    </Alert>
                    <Content>
                        <h1>UM LUGAR ONDE VIDAS<br /><span>SÃO TRANSFORMADAS POR DEUS</span></h1>
                        <p>Venha viver uma nova história com Deus ao lado de pessoas
                            que acreditam em transformação</p>
                    </Content>
                    <ContainerButtons>
                        <Button
                            $variant="primary"
                            onClick={() => navigate('/oracao')}
                        >
                            Pedir Oração
                        </Button>
                        <Button
                            $variant="secondary"
                            onClick={() => navigate('/sobre')}
                        >
                            Nos Conheça
                        </Button>
                    </ContainerButtons>
                </BackgroundImage>
                <section>
                    <TitleSection>Cultos Recentes</TitleSection>
                    <CardsCultos />
                </section>
                <SectionCell>
                    <div>
                        <ContentCell>
                            <div>
                                <span>Células</span>
                                <h3>Encontre Sua Célula!<br />
                                    Clique Aqui e Conecte-se Com a Gente.</h3>
                                <p>A igreja acontece nas casas. Venha fazer parte dessa família.</p>
                                <Button
                                    $variant="primary"
                                    onClick={() => navigate('celulas')}
                                >
                                    Participar de uma Células
                                </Button>
                            </div>
                        </ContentCell>
                        <ImageCell>
                        </ImageCell>
                    </div>
                </SectionCell>
                <SectionEvents>
                    <HeaderEvents>
                        <ContentEvents>
                            <h3>Próximos Eventos</h3>
                            <p>Veja a programação para os próximos dias.</p>
                        </ContentEvents>
                        <LinkEvents to="/eventos"><img src={IconsBg} alt="ícone" />Ver Mais</LinkEvents>
                    </HeaderEvents>
                    <CardsEvents />
                </SectionEvents>
                    <CardText 
                        title="Contribuições"
                        text='"Honra ao Senhor com os teus bens e com as primícias de toda a tua renda; e se encherão fartamente os teus celeiros, e transbordarão de vinho os teus lagares."'
                        subtext="(Pv 3.9,10)"
                        link="/contribuicao"
                        labelBotao="Veja as formas de contribuir"
                    />
            </Box>
        </Container>
    )
}

export default Home