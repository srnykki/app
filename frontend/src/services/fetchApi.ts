import axios from "axios"

const baseURL = process.env.API

const fetchApi = axios.create({
    baseURL
})

export default fetchApi