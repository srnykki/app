import MessagesList from "../components/MessagesList"
import { Messsages } from "../types/Model/Messages"

export default function Chats() {


    const data: Messsages[] = [
        {
            id: 1,
            author: 1,
            body: "1",
            user: {
                userId: 1,
                name: "Vini",
                token: "dq34tgfsdw",
            }
                
        },
        {
            id: 2,
            author: 2,
            body: "É brasil",
            user: {
                userId: 2,
                name: "Neymar",
                token: "qrtd3254w",
            }
        },
        {
            id: 3,
            author: 2,
            body: "É4",
            user: {
                userId: 2,
                name: "Neymar",
                token: "awerd534w",
            }
        },
        {
            id: 1,
            author:1,
            body: "É o gode",
            user: {
                userId: 1,
                name: "Vini",
                token: "dwsfsdb",
            }
        }

    ]




    return (
        <>
            <h1>
                <MessagesList messages={data} />
            </h1>
        </>
    )
}