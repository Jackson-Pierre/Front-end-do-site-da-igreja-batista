import { Container, Navigation, Box, LinkAdmin, ImageLogo } from "./style";

import { useResolvedPath } from "react-router-dom";

import Logo from "../../assets/logos/logoAdm.svg"

export function AdminBar() {
    const {pathname} = useResolvedPath()
    return (
    <Container>
        <Box>
            <ImageLogo>
                <img src={Logo} alt="logo da igreja" />
            </ImageLogo>
            <button>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <Navigation>
                <ul>
                    <li>
                        <LinkAdmin to='/admin/criar/eventos' $isActive={pathname === '/admin/criar/eventos'}>
                            Adicionar Evento
                        </LinkAdmin>
                    </li>
                    <li>
                        <LinkAdmin to='/admin/eventos' $isActive={pathname === '/admin/eventos'}>
                            Ver Eventos
                        </LinkAdmin>
                    </li>
                    <li>
                        <LinkAdmin to="/admin/criar/cultos" $isActive={pathname === '/admin/criar/cultos'}>
                            Adicionar Culto
                        </LinkAdmin>
                    </li>
                    <li>
                        <LinkAdmin to="/admin/cultos" $isActive={pathname === '/admin/cultos'}>
                            Ver Cultos
                        </LinkAdmin>
                    </li>
                </ul>
            </Navigation>
        </Box>
    </Container>
    )
}