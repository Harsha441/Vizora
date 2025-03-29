const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_URLS = {
	AUTH: {
		LOGIN: `${BASE_URL}/auth/login`,
		SIGNUP: `${BASE_URL}/auth/register`,
		LOGOUT: `${BASE_URL}/auth/logout`,
		VALIDATE: `${BASE_URL}/auth/validate`,
	},
	DATASOURCES: {
		UPLOADFILE: `${BASE_URL}/uploadFile/uploadFile`,
		GETDATASOURCES: `${BASE_URL}/getDatasources`,
	},
};

export default API_URLS;
