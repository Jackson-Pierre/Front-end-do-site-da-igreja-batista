import { Background } from "./style.js";

export const BackgroundImage = ({ children, ...props }) => {
    return (
        <Background {...props}>
            {children}
        </Background>
    )
}

export default BackgroundImage