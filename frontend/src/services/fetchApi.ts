import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const baseURL = "http://localhost:8080";

const fetchApi = axios.create({
    baseURL
});

export default fetchApi;