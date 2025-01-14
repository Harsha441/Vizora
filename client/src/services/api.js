import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL, // Base API URL from .env
	withCredentials: true, // Ensures cookies are sent with requests
});

// Global interceptors for handling errors, if needed
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			console.log("Unauthorized, redirecting to login...");
		}
		return Promise.reject(error);
	}
);

export default api;
