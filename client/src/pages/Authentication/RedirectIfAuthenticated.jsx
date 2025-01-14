import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import API_URLS from "../../constants/apiUrls";
import useApi from "../../hooks/useApi";

const RedirectIfAuthenticated = () => {
	const [isAuth, setIsAuth] = useState(null); // Track authentication state

	let { request } = useApi();

	useEffect(() => {
		const checkAuth = async () => {
			const auth = await isAuthenticated();
			setIsAuth(auth);
		};
		checkAuth();
	}, []);

	// Simulated authentication check
	const isAuthenticated = async () => {
		console.log("Inside isAuthenticated");
		try {
			let data = await request("POST", API_URLS.AUTH.VALIDATE);
			console.log(data);
			return data.status === "success";
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	if (isAuth === null) {
		return <div>Loading...</div>; // Optional: Add a loading spinner here
	}

	return isAuth ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default RedirectIfAuthenticated;
