import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

import { Button } from "../Button/index.jsx";

import { Container, Card, ImageEvent, Content, Utils, ContentInfo, TopCard, Date, Time, Line } from "./style.js";

import IcoLocal from "../../assets/icon/map-pin.svg";
import IcoClock from "../../assets/icon/clock.svg";

export function BlockEvents() {
    const [events, setEvents] = useState([]);

    async function loadEvents() {
        try {
            const { data } = await api.get("/events");
            setEvents(data);
        } catch (error) {
            console.error("Erro ao carregar eventos:", error);
        }
    }

    useEffect(() => {
        loadEvents();
    }, []);
    
    return (
        <Container>
            {events.map(event => (
                <Card key={event.id}>
                    <ImageEvent>
                        <img src={event.path} alt={event.name} />
                    </ImageEvent>
                    <Content>
                        <TopCard>
                            <Date>
                                <span className="month">{event.month}</span>
                                <span className="day">{event.day}</span>
                            </Date>
                            <Line></Line>
                            <Time>
                                <p><img src={IcoClock} alt="icone de hora" />{event.time}</p>
                                <p><img src={IcoLocal} alt="icone de local" />{event.local}</p>
                            </Time>
                        </TopCard>
                        <ContentInfo>
                            <h3>{event.name}</h3>
                            <p>{event.description}</p>
                        </ContentInfo>
                        <Utils>
                            <a href={event.link} target="_blank" rel="noreferrer">
                                <Button>Inscrever-se</Button>
                            </a>
                            <p>{event.value}</p>
                        </Utils>
                    </Content>
                </Card>
            ))}
        </Container>
    )
}