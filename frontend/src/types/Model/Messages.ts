import { Users } from "./Users";

export type Messsages = {
    id: number;
    author: number;
    body: string;
    createdAt?: Date;
    updatedAt?: Date;

    user: Users;
}