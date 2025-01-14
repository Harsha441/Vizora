const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_URLS = {
	AUTH: {
		LOGIN: `${BASE_URL}/auth/login`,
		SIGNUP: `${BASE_URL}/auth/signup`,
		LOGOUT: `${BASE_URL}/auth/logout`,
	},
};

export default API_URLS;
