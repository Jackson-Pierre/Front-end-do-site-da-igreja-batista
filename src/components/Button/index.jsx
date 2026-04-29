import { ButtonContainer } from "./style.js"

export function Button ({ children, ...props }) {
    return (
        <ButtonContainer {...props}>{children}</ButtonContainer>
    )
}
