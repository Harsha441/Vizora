import React from "react";
import useApi from "../hooks/useApi";
import API_URLS from "../constants/apiUrls";

const Dashboard = () => {
	let { request } = useApi();
	const handleLogout = async () => {
		try {
			let data = await request("POST", API_URLS.AUTH.LOGOUT);
		} catch (error) {}
	};
	return (
		<div>
			Dashboard
			<button onClick={handleLogout}>logout</button>
		</div>
	);
};

export default Dashboard;
