import BackgroundImageFull from "../../components/BackgroundImageFull/index.jsx";
import {SimpleModal} from "../../components/SimpleModal/index.jsx";
import { BlockEvents } from "../../components/BlockEvents/index.jsx";

import { Container, Box, Content, Modal, ModalTop, ContentModal, ImageModal } from "./style.js";

import Logo from "../../assets/logos/logo.svg"

function Events() {
    return (
        <Container>
            <Box>
                <BackgroundImageFull $variant="tertiary">
                    <Content>
                        <SimpleModal
                            title="O Que Está Acontecendo?"
                            text="Fique por dentro dos próximos eventos da igreja:"
                        />
                    </Content>
                </BackgroundImageFull>
                <Modal>
                    <ModalTop>
                        <ContentModal>
                            <h3>Proximos Eventos</h3>
                            <p>Veja a programação para os próximos dias.</p>
                        </ContentModal>
                        <ImageModal>
                            <img src={Logo} alt="logo da igreja" />
                        </ImageModal>
                    </ModalTop>
                    <div>
                        <BlockEvents />
                    </div>
                </Modal>
            </Box>
        </Container>
    )
}

export default Events