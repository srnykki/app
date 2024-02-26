import axios from 'axios'

const url = 'http://localhost:8080'

const api = axios.create({
	baseURL: url,
	withCredentials: true,
});

export default api