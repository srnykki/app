import { Container, TextField, Button } from "@mui/material";
import MessagesList from "../components/MessagesList";
import { Messsages } from "../types/Model/Messages";
import React, { useState } from "react";
import fetchApi from "../services/fetchApi";

export default function Chats() {
    const [messageData, setMessageData] = useState<Messsages[]>([])


    const [message, setMessage] = useState('');
    const [response, setResponse] = useState<any>(null); // Inicializa com 'null' para evitar erro ao tentar renderizar
    const [loading, setLoading] = useState<boolean>(false)

    async function handleSubmit() {

        setMessage('')
        setMessageData((prevItems) => [...prevItems, {
            id: messageData.length + 1,
            author: 1,
            body: message,
            user: {
                userId: 1,
                name: "_Coni",
                token: "dq34tgfsdw",
            },
        }])

        try {
            const { data } = await fetchApi.post("/generate", {
                prompt: message,
            });
            setResponse(data.response);

            setMessageData((prevItems) => [...prevItems, {
                id: messageData.length + 1,
                author: 2,
                body: data.response,
                user: {
                    userId: 2,
                    name: "ChatBot",
                    token: "dq34tgfsdw",
                },
            }])


            console.log(data.response);
        } catch (error) {
            console.error(error);
        }
    }

    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    return (
        <Container>



            <MessagesList messages={messageData} />


            <TextField
                label="Digite sua mensagem"
                value={message}
                onChange={handleMessage}
                variant="outlined"
                fullWidth
            />


            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: '10px' }}
            >
                Enviar
            </Button>
        </Container>
    );
}
