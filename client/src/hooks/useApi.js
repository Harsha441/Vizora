import { useState } from "react";
import api from "../services/api";

const useApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = async (method, url, data = {}, params = {}, headers = {}) => {
		console.log(" inside request", data);
		setLoading(true);
		setError(null);
		try {
			const response = await api({
				method,
				url,
				data,
				params,
				headers,
			});
			return response.data; // Return the response payload
		} catch (err) {
			setError(err.response?.data?.message || "An error occurred");
			throw err; // Rethrow for component-specific handling
		} finally {
			setLoading(false);
		}
	};

	return { request, loading, error };
};

export default useApi;
