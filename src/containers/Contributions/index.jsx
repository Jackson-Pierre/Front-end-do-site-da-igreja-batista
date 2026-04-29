import { useState } from "react";

import QR from "../../assets/qr-code.webp";
import IcoClock from "../../assets/icon/clock.svg";
import IcoLocation from "../../assets/icon/map-pin.svg";

import BackgroundImageFull from "../../components/BackgroundImageFull/index.jsx";
import { CardsInfos } from "../../components/CardsInfos/index.jsx";
import { Button } from "../../components/Button/index.jsx";

import { Container, Box, Content, ContentModal, Modal, ContentInfo, Location, ContentLocal, ModalLocal } from "./style.js";

function Contributions() {
    const pixKey = import.meta.env.VITE_PIX_KEY;
    const [copied, setCopied] = useState(false);

    const CopyPix = () => {
        navigator.clipboard.writeText(pixKey)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 3000);
            })
            .catch(err => {
                console.error("Erro ao copiar: ", err);
            });
    };

    return (
        <Container>
            <Box>
                <BackgroundImageFull $variant="secondary">
                    <Content>
                        <div>
                            <h2>Sua contribuição <span>transforma vidas</span></h2>
                            <p>"Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." (2 Co 9:7)</p>
                        </div>
                    </Content>
                </BackgroundImageFull>
                <Modal>
                    <ContentModal>
                        <h3>Contribua via PIX</h3>
                        <img src={QR} alt="QR Code" />
                        <p>Escaneie o QR code acima com o seu celular ou utilize a chave Pix abaixo:</p>
                        
                        <div>
                            {!copied ? (
                                <>
                                    <span>{pixKey}</span>
                                    <button onClick={CopyPix}>Copiar</button>
                                </>
                            ) : (
                                <strong>
                                    Copiado!
                                </strong>
                            )}
                        </div>
                    </ContentModal>
                </Modal>
                <ContentInfo>
                        <CardsInfos />
                </ContentInfo>
                <Location>
                    <ContentLocal>
                        <h3>Visite-nos pessoalmente</h3>
                        <p>Se preferir, você pode entregar sua contribuição pessoalmente durante nossos cultos. Estamos de braços abertos para te receber.</p>
                        <div>
                            <span><img src={IcoLocation} alt="" />Av. Diamantino - Jardim Guaraná, Diamantino - MT, 78400-000</span>
                            <span><img src={IcoClock} alt="" />Domingos, 08:00 e as 18:30</span>
                        </div>
                        <a href="https://maps.app.goo.gl/doB8Zy2G1as89AMP7" target="_blank" rel="noreferrer"><Button $variant="primary">Como Chegar</Button></a>
                    </ContentLocal>
                    <ModalLocal>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17860.
                        325615353777!2d-56.43830680276228!3d-14.411017596073115!3m2!1i102
                        4!2i768!4f13.1!3m3!1m2!1s0x939f1b103ed557ad%3A0xf9094e9bdfa1ada0!
                        2sIgreja%20Batista%20de%20Diamantino!5e0!3m2!1spt-BR!2sbr!4v177689
                        2587020!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                    </ModalLocal>
                </Location>
            </Box>
        </Container>
    );
}

export default Contributions;