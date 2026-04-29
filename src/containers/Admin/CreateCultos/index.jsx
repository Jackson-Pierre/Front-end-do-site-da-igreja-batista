import { useState } from "react";
import { api } from "../../../services/api";
import { Container, FormContainer, Label, FileButton, Input } from "./style.js"; 
import { Button } from "../../../components/Button"; 
import * as yup from "yup";

function CreateCultos() {
    const [formData, setFormData] = useState({
        name: "",
        preacher: "",
        date: "",
        url_live: "",
        url_word: "",
        file: null
    });

    async function handleCreate(e) {
        e.preventDefault();
        const schema = yup.object().shape({
            file: yup.mixed().required("A imagem é obrigatória"),
            name: yup.string().required("O tema da palavra é obrigatório"),
            preacher: yup.string().required("O pregador é obrigatório"),
            date: yup.string().required("A data é obrigatória"),
            url_live: yup.string().url("Link da live inválido").required("O link da live é obrigatório"),
            url_word: yup.string().url("Link da palavra inválido").required("O link da palavra é obrigatório"),
        });

        try {
            await schema.validate(formData, { abortEarly: false });

            const data = new FormData();
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });

            await api.post("/cultos", data);
            alert("Culto cadastrado com sucesso!");
            setFormData({ name: "", preacher: "", date: "", url_live: "", url_word: "", file: null });
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                alert(err.inner[0].message); 
            } else {
                console.error(err);
                alert("Erro ao cadastrar culto.");
            }
        }
    }

    return (
        <Container>
            <FormContainer onSubmit={handleCreate}>
                <Label>Imagem:</Label>
                <FileButton>
                    {formData.file ? formData.file.name : "Carregar img"}
                    <input
                        type="file"
                        onChange={e => setFormData({...formData, file: e.target.files[0]})}
                    />
                </FileButton>
                <Label>Tema da palavra:</Label>
                <Input
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <Label>Quem pregou:</Label>
                <Input
                    value={formData.preacher}
                    onChange={e => setFormData({...formData, preacher: e.target.value})}
                />
                <Label>Data:</Label>
                <Input
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                />
                <Label>Link da live:</Label>
                <Input
                    value={formData.url_live}
                    onChange={e => setFormData({...formData, url_live: e.target.value})}
                />
                <Label>Link da Palavra:</Label>
                <Input
                    value={formData.url_word}
                    onChange={e => setFormData({...formData, url_word: e.target.value})}
                />
                <Button type="submit">Criar</Button>
            </FormContainer>
        </Container>
    );
}

export default CreateCultos;