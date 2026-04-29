import { useState } from "react";
import { api } from "../../../../services/api.js";
import { FormContainer, Label, FileButton, Input } from "./style.js";
import { Button } from "../../../../components/Button/index.jsx";
import * as yup from "yup"; 

export function FormCulto({ item, onClose, onUpdate }) {
    const isEditing = !!item;
    const [formData, setFormData] = useState({
        name: item?.name || "",
        preacher: item?.preacher || "",
        date: item?.date || "",
        url_live: item?.url_live || "",
        url_word: item?.url_word || "",
        file: null
    });

    async function handleSave(e) {
        e.preventDefault();
        const schema = yup.object().shape({
            file: isEditing ? yup.mixed() : yup.mixed().required("A imagem é obrigatória"),
            name: yup.string(),
            preacher: yup.string(),
            date: yup.string().required("A data é obrigatória"),
            url_live: yup.string().url("Link da live inválido"),
            url_word: yup.string().url("Link da palavra inválido"),
        });

        try {
            await schema.validate(formData, { abortEarly: false });

            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'file') {
                    if (formData.file) data.append("file", formData.file);
                } else {
                    data.append(key, formData[key]);
                }
            });

            if (isEditing) {
                await api.put(`/cultos/${item.id}`, data);
            } else {
                await api.post("/cultos", data);
            }
            onUpdate();
            onClose();
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                alert(err.inner[0].message); 
            } else {
                alert("Erro ao salvar dados.");
            }
        }
    }

    return (
        <FormContainer onSubmit={handleSave}>
            <Label>Imagem:</Label>
            <FileButton>
                {formData.file ? formData.file.name : "Carregar img"}
                <input type="file" onChange={e => setFormData({...formData, file: e.target.files[0]})} />
            </FileButton>

            <Label>Tema da palavra:</Label>
            <Input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />

            <Label>Quem pregou:</Label>
            <Input value={formData.preacher} onChange={e => setFormData({...formData, preacher: e.target.value})} />

            <Label>Data:</Label>
            <Input value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />

            <Label>Link da live:</Label>
            <Input value={formData.url_live} onChange={e => setFormData({...formData, url_live: e.target.value})} />

            <Label>Link da Palavra:</Label>
            <Input value={formData.url_word} onChange={e => setFormData({...formData, url_word: e.target.value})} />

            <Button type="submit">{isEditing ? "Atualizar" : "Criar"}</Button>
        </FormContainer>
    );
}