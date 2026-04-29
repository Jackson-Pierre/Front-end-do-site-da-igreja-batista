import { useEffect } from "react";
import { Overlay, ModalContainer, CloseButton } from "./style.js";

import Fechar from "../../assets/icon/circle-x.svg"

export function ModalContact({ isOpen, setIsOpen, children }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <Overlay onClick={() => setIsOpen(false)}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={() => setIsOpen(false)}>
                    <img src={Fechar} alt="Fechar" /> 
                </CloseButton>
                
                <div className="modal-content">
                    {children}
                </div>
            </ModalContainer>
        </Overlay>
    );
}