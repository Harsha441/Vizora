import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import useApi from "../../hooks/useApi";
import API_URLS from "../../constants/apiUrls";

const ProtectedRoute = () => {
	const [isAuth, setIsAuth] = useState(null); // `null` to show a loading state initially

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

	return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
