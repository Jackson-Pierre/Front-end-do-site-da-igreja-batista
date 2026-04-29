import { useState } from "react";
import { useResolvedPath } from "react-router-dom";
import Logo from "../../assets/logos/logo.svg";

import { 
    Container, 
    Navigation, 
    Box, 
    LinkHeader, 
    ImageLogo, 
    Overlay, 
    CloseButton, 
    MobileMenuButton 
} from "./style";

export function Header() {
    const { pathname } = useResolvedPath();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Overlay $isOpen={isOpen} onClick={toggleMenu} />

            <Box>
                <ImageLogo>
                    <img src={Logo} alt="logo da igreja" />
                </ImageLogo>

                <MobileMenuButton onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </MobileMenuButton>

                <Navigation $isOpen={isOpen}>
                    <CloseButton onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                    </CloseButton>

                    <ul>
                        <li>
                            <LinkHeader to='/' $isActive={pathname === '/'} onClick={() => setIsOpen(false)}>
                                INÍCIO
                            </LinkHeader>
                        </li>
                        <li>
                            <LinkHeader to='/sobre' $isActive={pathname === '/sobre'} onClick={() => setIsOpen(false)}>
                                SOBRE
                            </LinkHeader>
                        </li>
                        <li>
                            <LinkHeader to="/celulas" $isActive={pathname === '/celulas'} onClick={() => setIsOpen(false)}>
                                CÉLULA
                            </LinkHeader>
                        </li>
                        <li>
                            <LinkHeader to="/eventos" $isActive={pathname === '/eventos'} onClick={() => setIsOpen(false)}>
                                EVENTOS
                            </LinkHeader>
                        </li>
                        <li>
                            <LinkHeader to="/oracao" $isActive={pathname === '/oracao'} onClick={() => setIsOpen(false)}>
                                ORAÇÃO
                            </LinkHeader>
                        </li>
                        <li>
                            <LinkHeader to="/contribuicao" $isActive={pathname === '/contribuicao'} onClick={() => setIsOpen(false)}>
                                CONTRIBUIÇÕES
                            </LinkHeader>
                        </li>
                    </ul>
                </Navigation>
            </Box>
        </Container>
    );
}