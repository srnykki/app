import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.API;

const fetchApi = axios.create({
    baseURL
});

export default fetchApi;