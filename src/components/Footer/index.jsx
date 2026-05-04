import { LinkHeader, FooterContainer, FooterBox, Copyright, FooterContent, Navigation, Visual, Local } from "./styles.js";

import Logo from "../../assets/logos/logoFooter.svg";
import Whatsapp from "../../assets/icon/whatsapp.svg";
import Instagram from "../../assets/icon/instagram.svg";
import Youtube from "../../assets/icon/youtube.svg";

export function Footer() {
    return (
        <FooterContainer>
            <FooterBox>
                <FooterContent>
                    <Visual>
                        <img src={Logo} alt="Logo da igreja" />
                        <p>Uma família para pertencer, um lugar para crescer e uma missão para viver.</p>
                        <LinkHeader className="privacy-policy" to='/privacy-policy'>Política de Privacidade</LinkHeader>
                    </Visual>
                    <div>
                        <Navigation>
                            <li>
                                <LinkHeader to='/'>
                                    INÍCIO
                                </LinkHeader>
                            </li>
                            <li>
                                <LinkHeader to='/sobre'>
                                    SOBRE
                                </LinkHeader>
                            </li>
                            <li>
                                <LinkHeader to="/celulas">
                                    CÉLULA
                                </LinkHeader>
                            </li>
                            <li>
                                <LinkHeader to="/eventos">
                                    EVENTOS
                                </LinkHeader>
                            </li>
                            <li>
                                <LinkHeader to="/oracao">
                                    ORAÇÃO
                                </LinkHeader>
                            </li>
                            <li>
                                <LinkHeader to="/contribuicao">
                                    CONTRIBUIÇÕES
                                </LinkHeader>
                            </li>
                        </Navigation>
                        </div>
                    <Local>
                        <p>Av. Diamantino - Jardim Guaraná, Diamantino - MT, 78400-000</p>
                        <p>Domingos, 08:00 e as 18:30</p>
                        <div>
                            <a href="https://wa.me/65999239760" target="_blank" rel="noopener noreferrer">
                                <img src={Whatsapp} alt="WhatsApp" />
                            </a>
                            <a href="https://www.instagram.com/iblifedtno?igsh=MThjMDMxMW80MGhjdw==" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram" />
                            </a>
                            <a href="https://youtube.com/@igrejabatistalifediamantino?si=PLEKMO5Ks-WECEjZ" target="_blank" rel="noopener noreferrer">
                                <img src={Youtube} alt="Youtube" />
                            </a>
                        </div>
                    </Local>
                </FooterContent>
                <Copyright>
                    <p>© 2026 Igreja Batista Life. Todos os direitos reservados.</p>
                </Copyright>
            </FooterBox>
        </FooterContainer>
    );
}