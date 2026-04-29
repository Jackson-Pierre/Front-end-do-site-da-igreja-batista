import { Container } from "./style.js";

import { Button } from "../Button";

export const CardText = ({ title, text, link, onClickBotao, labelBotao, subtext }) => {
    const handleClick = (e) => {
        if (onClickBotao) {
            e.preventDefault();
            onClickBotao();
        }
    };

    return (
        <Container>
            <h2>{title}</h2>
            <div>
                <p>{text}</p>
                <span>{subtext}</span>
            </div>
            <a href={link || ""} onClick={link ? undefined : handleClick}>
                <Button $variant="primary">
                    {labelBotao}
                </Button>
            </a>
        </Container>
    );
};