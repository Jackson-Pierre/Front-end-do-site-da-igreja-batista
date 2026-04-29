import { useState } from "react";
import { api } from "../../../services/api";
import { Container, FormContainer, TextArea, Label, FileButton, Row, Column, Input } from "./style.js";
import { Button } from "../../../components/Button";
import * as yup from "yup"; 

function CreateEvents() {
    const [formData, setFormData] = useState({
        name: "",
        month: "",
        day: "",
        value: "",
        link: "",
        time: "",
        local: "",
        description: "",
        file: null
    });

    async function handleCreate(e) {
        e.preventDefault();
        const schema = yup.object().shape({
            file: yup.mixed().required("A imagem é obrigatória"),
            name: yup.string().required("O nome do evento é obrigatório"),
            month: yup.string().required("O mês é obrigatório"),
            day: yup.string().required("O dia é obrigatório"),
            value: yup.string().required("O valor é obrigatório"),
            link: yup.string().url("Link do evento inválido").required("O link é obrigatório"),
            time: yup.string().required("O horário é obrigatório"),
            local: yup.string().required("O local é obrigatório"),
            description: yup.string().required("A descrição é obrigatória"),
        });

        try {
            await schema.validate(formData, { abortEarly: false });

            const data = new FormData();
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });

            await api.post("/events", data);
            alert("Evento cadastrado com sucesso!");
            window.location.reload(); 
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                alert(err.inner[0].message); 
            } else {
                alert("Erro ao cadastrar evento.");
            }
        }
    }

    return (
        <Container>
            <FormContainer onSubmit={handleCreate}>
                <Label>Imagem:</Label>
                <FileButton>
                    {formData.file ? formData.file.name : "Carregar img"}
                    <input type="file" onChange={e => setFormData({...formData, file: e.target.files[0]})} />
                </FileButton>
                <Label>Nome do evento:</Label>
                <Input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <Row>
                    <Column>
                        <Label>Mes:</Label>
                        <Input value={formData.month} onChange={e => setFormData({...formData, month: e.target.value})} placeholder="Jan" />
                    </Column>
                    <Column>
                        <Label>Dia:</Label>
                        <Input value={formData.day} onChange={e => setFormData({...formData, day: e.target.value})} placeholder="01" />
                    </Column>
                </Row>
                <Label>Valor do Evento:</Label>
                <Input value={formData.value} onChange={e => setFormData({...formData, value: e.target.value})} />
                <Label>Link do evento:</Label>
                <Input value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} />
                <Row>
                    <Column>
                        <Label>Horário:</Label>
                        <Input value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} placeholder="19:00 - 20:00" />
                    </Column>
                    <Column>
                        <Label>Local:</Label>
                        <Input value={formData.local} onChange={e => setFormData({...formData, local: e.target.value})} />
                    </Column>
                </Row>
                <Label>Descrição do evento:</Label>
                <TextArea
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    rows="5"
                />
                <Button type="submit">Enviar</Button>
            </FormContainer>
        </Container>
    );
}

export default CreateEvents;